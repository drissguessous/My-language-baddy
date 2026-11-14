"""Configuration et utilitaires partagés du pipeline de voix (exécuté dans GitHub Actions)."""
import re
import unicodedata

# Voix candidates par langue. Le pipeline les génère toutes, les vérifie par reconnaissance
# vocale (Whisper) et ne garde que les deux meilleures (une féminine et une masculine si possible).
# Application commercialisable : seules les voix dont la licence autorise l'usage commercial sont
# listées (Apache-2.0, CC0, CC-BY), vérifiées sur les cartes de modèles le 14/11/2026.
# Exclues : MMS (CC-BY-NC), voix hindi Piper (CC-BY-NC-SA), Tom (AGPL), Kareem, Gyro, Huayan,
# Riccardo (licence non précisée). L'arabe et l'amazigh utilisent donc la voix de l'appareil.
# engine: kokoro (lang_code, voix) | piper (chemin du modèle dans rhasspy/piper-voices) | mms (dépôt HF)
CANDIDATES = {
    'en': [
        dict(id='bf_emma', engine='kokoro', code='b', name='Emma', gender='f', accent='en-GB', license='Apache-2.0'),
        dict(id='bf_isabella', engine='kokoro', code='b', name='Isabella', gender='f', accent='en-GB', license='Apache-2.0'),
        dict(id='bm_george', engine='kokoro', code='b', name='George', gender='m', accent='en-GB', license='Apache-2.0'),
        dict(id='bm_fable', engine='kokoro', code='b', name='Fable', gender='m', accent='en-GB', license='Apache-2.0'),
    ],
    'fr': [
        dict(id='siwis', engine='piper', model='fr/fr_FR/siwis/medium/fr_FR-siwis-medium', name='Siwis', gender='f', accent='fr-FR', license='CC-BY-4.0'),
        dict(id='ff_siwis', engine='kokoro', code='f', name='Siwis (Kokoro)', gender='f', accent='fr-FR', license='Apache-2.0'),
        dict(id='gilles', engine='piper', model='fr/fr_FR/gilles/low/fr_FR-gilles-low', name='Gilles', gender='m', accent='fr-FR', license='CC0'),
    ],
    'es': [
        dict(id='ef_dora', engine='kokoro', code='e', name='Dora', gender='f', accent='es', license='Apache-2.0'),
        dict(id='em_alex', engine='kokoro', code='e', name='Álex', gender='m', accent='es', license='Apache-2.0'),
        dict(id='davefx', engine='piper', model='es/es_ES/davefx/medium/es_ES-davefx-medium', name='Dave', gender='m', accent='es-ES', license='CC0'),
        dict(id='sharvard', engine='piper', model='es/es_ES/sharvard/medium/es_ES-sharvard-medium', name='Sharvard', gender='m', accent='es-ES', license='CC-BY-3.0'),
    ],
    'it': [
        dict(id='if_sara', engine='kokoro', code='i', name='Sara', gender='f', accent='it-IT', license='Apache-2.0'),
        dict(id='paola', engine='piper', model='it/it_IT/paola/medium/it_IT-paola-medium', name='Paola', gender='f', accent='it-IT', license='CC0'),
        dict(id='im_nicola', engine='kokoro', code='i', name='Nicola', gender='m', accent='it-IT', license='Apache-2.0'),
    ],
    'pt': [
        dict(id='tugao', engine='piper', model='pt/pt_PT/tugão/medium/pt_PT-tugão-medium', name='Tugão', gender='m', accent='pt-PT', license='CC0'),
        dict(id='pf_dora', engine='kokoro', code='p', name='Dora', gender='f', accent='pt-BR', license='Apache-2.0'),
        dict(id='pm_alex', engine='kokoro', code='p', name='Alex', gender='m', accent='pt-BR', license='Apache-2.0'),
    ],
    'ar': [],
    'fa': [
        dict(id='amir', engine='piper', model='fa/fa_IR/amir/medium/fa_IR-amir-medium', name='Amir', gender='m', accent='fa-IR', license='CC0'),
        dict(id='ganji', engine='piper', model='fa/fa_IR/ganji/medium/fa_IR-ganji-medium', name='Ganji', gender='m', accent='fa-IR', license='CC0'),
        dict(id='reza_ibrahim', engine='piper', model='fa/fa_IR/reza_ibrahim/medium/fa_IR-reza_ibrahim-medium', name='Reza', gender='m', accent='fa-IR', license='CC0'),
    ],
    'hi': [
        dict(id='hf_alpha', engine='kokoro', code='h', name='Alpha', gender='f', accent='hi-IN', license='Apache-2.0'),
        dict(id='hf_beta', engine='kokoro', code='h', name='Beta', gender='f', accent='hi-IN', license='Apache-2.0'),
        dict(id='hm_omega', engine='kokoro', code='h', name='Omega', gender='m', accent='hi-IN', license='Apache-2.0'),
        dict(id='hm_psi', engine='kokoro', code='h', name='Psi', gender='m', accent='hi-IN', license='Apache-2.0'),
    ],
    'zh': [
        dict(id='zf_xiaobei', engine='kokoro', code='z', name='Xiaobei', gender='f', accent='zh-CN', license='Apache-2.0'),
        dict(id='zf_xiaoxiao', engine='kokoro', code='z', name='Xiaoxiao', gender='f', accent='zh-CN', license='Apache-2.0'),
        dict(id='zm_yunjian', engine='kokoro', code='z', name='Yunjian', gender='m', accent='zh-CN', license='Apache-2.0'),
        dict(id='zm_yunxi', engine='kokoro', code='z', name='Yunxi', gender='m', accent='zh-CN', license='Apache-2.0'),
    ],
    'ja': [
        dict(id='jf_alpha', engine='kokoro', code='j', name='Alpha', gender='f', accent='ja-JP', license='Apache-2.0'),
        dict(id='jf_gongitsune', engine='kokoro', code='j', name='Gongitsune', gender='f', accent='ja-JP', license='Apache-2.0 / CC BY'),
        dict(id='jm_kumo', engine='kokoro', code='j', name='Kumo', gender='m', accent='ja-JP', license='Apache-2.0 / CC BY'),
    ],
    'ber': [],
}

WHISPER_LANG = {'fr': 'fr', 'en': 'en', 'es': 'es', 'it': 'it', 'pt': 'pt', 'ar': 'ar', 'fa': 'fa', 'hi': 'hi', 'zh': 'zh', 'ja': 'ja'}

# Seuil d'acceptation d'un enregistrement : taux d'erreur de caractères (CER) entre la
# transcription Whisper et le texte attendu.
CER_PASS = 0.25

PUNCT = re.compile(r"[\s.,;:!?؟،؛¡¿\"“”«»'’‘()\[\]\-–—…、。，．！？：；「」『』《》·।]+")
ARABIC_MARKS = re.compile('[ً-ٰٟۖ-ۭـ]')
DIGITS = str.maketrans('٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹०१२३४५६७८९', '012345678901234567890123456789')


def normalize(text: str, lang: str) -> str:
    s = unicodedata.normalize('NFKC', text).lower().translate(DIGITS)
    if lang in ('ar', 'fa'):
        s = ARABIC_MARKS.sub('', s)
        for a, b in (('أ', 'ا'), ('إ', 'ا'), ('آ', 'ا'), ('ٱ', 'ا'), ('ى', 'ي'), ('ة', 'ه'), ('ك', 'ک'), ('ي', 'ی'), ('‌', '')):
            s = s.replace(a, b)
    if lang in ('fr', 'en', 'es', 'it', 'pt', 'ber'):
        s = ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn')
    return PUNCT.sub('', s)


_kks = None
_t2s = None


def phonetic(text: str, lang: str) -> str:
    """Forme comparable : pinyin sans tons pour le chinois, hiragana pour le japonais."""
    global _kks, _t2s
    if lang == 'zh':
        from pypinyin import lazy_pinyin
        if _t2s is None:
            from opencc import OpenCC
            _t2s = OpenCC('t2s')
        return ''.join(lazy_pinyin(_t2s.convert(text)))
    if lang == 'ja':
        if _kks is None:
            import pykakasi
            _kks = pykakasi.kakasi()
        return ''.join(x['hira'] for x in _kks.convert(text))
    return text


def cer(ref: str, hyp: str, lang: str) -> float:
    r = normalize(phonetic(ref, lang), lang)
    h = normalize(phonetic(hyp, lang), lang)
    if not r:
        return 0.0 if not h else 1.0
    prev = list(range(len(h) + 1))
    for i in range(1, len(r) + 1):
        cur = [i]
        for j in range(1, len(h) + 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (r[i - 1] != h[j - 1])))
        prev = cur
    return min(1.0, prev[len(h)] / len(r))


def fnv(text: str) -> str:
    h = 0x811C9DC5
    for ch in text:
        h ^= ord(ch)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return f'{h:08x}'


def to_mms_shi(latin: str) -> str:
    """Latin IRCAM -> alphabet du modèle MMS tachelhit (ε, ġ, ḫ, š)."""
    s = latin.lower()
    for a, b in (('ɛ', 'ε'), ('ɣ', 'ġ'), ('x', 'ḫ'), ('c', 'š'), ('ʷ', ''), ('o', 'u'), ('p', 'b'), ('v', 'f'), ('ṛ', 'r')):
        s = s.replace(a, b)
    return s
