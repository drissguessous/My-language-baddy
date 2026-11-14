import React, { useState } from 'react';
import { Alert, Platform, Pressable, Switch, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Avatar } from '../../components/Avatar';
import { Btn, Card, Chip, Gap, LangBadge, Row, Screen, T } from '../../components/ui';
import { BAND_LABEL, COMPANION } from '../../data/companions';
import { GOALS, PRO_TRACKS } from '../../data/curriculum';
import { LANGUAGES, LANG, LangCode, REFERENCE_LANGS } from '../../data/languages';
import type { Settings } from '../../lib/db';
import { INTENSITIES, TONES } from '../../data/coachLines';
import { useStore } from '../../lib/store';
import { C, F } from '../../theme';

function confirm(msg: string, ok: () => void) {
  if (Platform.OS === 'web') { if (globalThis.confirm?.(msg)) ok(); return; }
  Alert.alert('Confirmation', msg, [{ text: 'Annuler', style: 'cancel' }, { text: 'Confirmer', style: 'destructive', onPress: ok }]);
}

export default function Me() {
  const s = useStore();
  const { profile, age, band, currentLevel, progress, db, teacher } = s;
  const [langOpen, setLangOpen] = useState(false);
  if (!profile) return null;
  const set = (k: keyof Settings) => (v: boolean) => s.updateProfile({ settings: { ...profile.settings, [k]: v } });
  const locked = !!profile.parental && band !== 'adult';

  return (
    <Screen>
      <T v="title">Profil</T>
      <Gap h={14} />
      <Card>
        <Row>
          <Avatar spec={COMPANION[profile.companionId]?.avatar ?? COMPANION.nadia.avatar} size={64} />
          <View style={{ flex: 1 }}>
            <T v="h2">{profile.name}</T>
            <T v="small">{age} ans · {BAND_LABEL[band]}{profile.demo ? ' · démo' : ''}</T>
            <T v="small">{GOALS.find((g) => g.id === profile.goal)?.title}{profile.proTrack ? ` · ${PRO_TRACKS.find((t) => t.id === profile.proTrack)?.title}` : ''}</T>
          </View>
        </Row>
        <Gap />
        <Row style={{ justifyContent: 'space-around' }}>
          <Stat n={currentLevel} l="niveau" /><Stat n={String(Object.keys(progress.units).length)} l="unités" /><Stat n={String(progress.xp)} l="XP" />
        </Row>
      </Card>

      <Gap h={18} />
      <T v="label">Langues</T>
      <Gap h={8} />
      <Card onPress={() => setLangOpen(!langOpen)}>
        <Row><LangBadge code={profile.targetLang} /><View style={{ flex: 1 }}><Text style={{ fontWeight: '700' }}>J’apprends le {LANG[profile.targetLang].name.toLowerCase()}</Text><T v="small">Toucher pour changer (la progression de chaque langue est conservée)</T></View></Row>
      </Card>
      {langOpen ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {LANGUAGES.filter((l) => l.code !== profile.refLang).map((l) => (
            <Chip key={l.code} label={l.name} active={l.code === profile.targetLang} color={l.color}
              onPress={() => { s.updateProfile({ targetLang: l.code }); setLangOpen(false); }} />
          ))}
        </View>
      ) : null}
      <Gap h={10} />
      <T v="small">Traductions affichées en :</T>
      <Row style={{ flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
        {REFERENCE_LANGS.filter((c) => c !== profile.targetLang).map((c: LangCode) => (
          <Chip key={c} label={LANG[c].native} active={profile.refLang === c} onPress={() => s.updateProfile({ refLang: c })} />
        ))}
      </Row>

      <Gap h={18} />
      <T v="label">Mode professeur</T>
      <Gap h={8} />
      <Card>
        <T v="small">Ton du compagnon</T>
        <Row style={{ flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
          {TONES.map((t) => (
            <Chip key={t.id} label={t.label} active={teacher.tone === t.id}
              onPress={() => s.updateProfile({ settings: { ...profile.settings, teacher: { ...teacher, tone: t.id } } })} />
          ))}
        </Row>
        <T v="small" style={{ marginTop: 6 }}>{TONES.find((t) => t.id === teacher.tone)?.text}</T>
        <Gap h={12} />
        <T v="small">Intensité</T>
        <Row style={{ flexWrap: 'wrap', gap: 8, marginTop: 6 }}>
          {INTENSITIES.map((n) => (
            <Chip key={n.id} label={n.label} active={teacher.intensity === n.id}
              onPress={() => s.updateProfile({ settings: { ...profile.settings, teacher: { ...teacher, intensity: n.id } } })} />
          ))}
        </Row>
        <T v="small" style={{ marginTop: 6 }}>
          {teacher.intensity === 1 ? 'Le compagnon intervient seulement pour corriger et féliciter.'
            : teacher.intensity === 2 ? 'Le compagnon donne aussi les consignes.'
            : 'Le compagnon parle beaucoup : consignes, retours et anecdotes.'}
        </T>
      </Card>

      <Gap h={18} />
      <Card onPress={() => router.push('/voices')}>
        <Row><Text style={{ fontSize: 24 }}>🎧</Text><View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700' }}>Voix et écoute</Text>
          <T v="small">Choisir la voix, tester et améliorer la voix du téléphone</T>
        </View><Text style={{ color: C.sub, fontSize: 20 }}>›</Text></Row>
      </Card>

      <Gap h={18} />
      <T v="label">Écoute et affichage</T>
      <Gap h={8} />
      <Card>
        <Toggle label="Lecture automatique des phrases" v={profile.settings.autoPlay} on={set('autoPlay')} />
        <Toggle label="Audio ralenti par défaut" v={profile.settings.slowAudio} on={set('slowAudio')} />
        <Toggle label="Afficher la transcription (pinyin, rōmaji…)" v={profile.settings.showRomanization} on={set('showRomanization')} />
        <Toggle label="Le compagnon parle à voix haute" v={profile.settings.coachVoice} on={set('coachVoice')} last />
      </Card>

      <Gap h={18} />
      <T v="label">Sécurité</T>
      <Gap h={8} />
      <Card onPress={() => router.push('/parental')}>
        <Row><Text style={{ fontSize: 24 }}>🛡️</Text><View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700' }}>Espace parent et protection</Text>
          <T v="small">{profile.parental ? 'Protégé par code · durée, micro, compagnon, âge' : 'Ajouter un code parental'}</T>
        </View></Row>
      </Card>
      <Gap h={8} />
      <Card tone={C.primarySoft}>
        <T style={{ fontSize: 14 }}>
          Filtre de langage actif : grossièretés, insultes et propos haineux bloqués pour tous{band !== 'adult' ? ' ; alcool, jeux d’argent et armes bloqués pour ce profil mineur' : ''}.
          Aucune donnée n’est envoyée à un serveur My Language Baddy : tout reste sur l’appareil.
        </T>
      </Card>

      <Gap h={18} />
      <T v="label">Profils sur cet appareil</T>
      <Gap h={8} />
      {db.profiles.map((p) => (
        <Pressable key={p.id} disabled={p.id === profile.id || locked} onPress={() => s.switchProfile(p.id)}>
          <Card style={{ marginBottom: 8, borderWidth: 2, borderColor: p.id === profile.id ? C.primary : 'transparent' }}>
            <Row><Avatar spec={COMPANION[p.companionId]?.avatar ?? COMPANION.nadia.avatar} size={40} />
              <View style={{ flex: 1 }}><Text style={{ fontWeight: '700' }}>{p.name}{p.demo ? ' (démo)' : ''}</Text><T v="small">{LANG[p.targetLang].name}</T></View>
              {p.id === profile.id ? <T v="small">actif</T> : null}</Row>
          </Card>
        </Pressable>
      ))}
      {locked ? <T v="small">Le changement de profil est protégé : passez par l’espace parent.</T> : (
        <>
          <Gap h={6} />
          <Row>
            <Btn style={{ flex: 1 }} small title="Nouveau profil" variant="soft" onPress={() => router.push('/welcome')} />
            <Btn style={{ flex: 1 }} small title="Profils démo" variant="ghost" onPress={() => s.loadDemo()} />
          </Row>
          <Gap h={20} />
          <Btn small title="Effacer toutes les données" variant="danger"
            onPress={() => confirm('Effacer tous les profils et la progression de cet appareil ?', () => { s.resetAll(); router.replace('/welcome'); })} />
        </>
      )}
      <Gap h={16} />
      <T v="small" style={{ textAlign: 'center' }}>My Language Baddy · v1.0</T>
    </Screen>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 22, fontWeight: '800', color: C.ink }}>{n}</Text><Text style={F.small}>{l}</Text></View>;
}

function Toggle({ label, v, on, last }: { label: string; v: boolean; on: (v: boolean) => void; last?: boolean }) {
  return (
    <Row style={{ justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: last ? 0 : 1, borderColor: C.line }}>
      <Text style={{ flex: 1, color: C.ink }}>{label}</Text>
      <Switch value={v} onValueChange={on} trackColor={{ true: C.primary, false: C.line }} accessibilityLabel={label} />
    </Row>
  );
}
