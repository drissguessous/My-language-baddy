import React, { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text, TextInput } from '../components/Text';
import { router } from 'expo-router';
import { ArrowRight, BriefcaseBusiness, Check, ChevronLeft, GraduationCap, Mic, Headphones, RotateCcw, ShieldCheck, Sparkles, Users } from 'lucide-react-native';
import { Wordmark } from '../components/Logo';
import { TRACK_ICON } from '../components/unitIcons';
import { Avatar } from '../components/Avatar';
import { Btn, Card, Chip, Gap, IconTile, LangBadge, Row, Screen, T } from '../components/ui';
import { BAND_LABEL, ageOf, bandOf, companionsFor } from '../data/companions';
import { GOALS, Goal, LEVELS, LEVEL_INFO, Level, PRO_TRACKS, ProTrack } from '../data/curriculum';
import { LANGUAGES, LANG, LangCode, REFERENCE_LANGS } from '../data/languages';
import { BLOCK_MESSAGE, moderate } from '../lib/safety/filter';
import { speakCoach } from '../lib/speech';
import { useStore } from '../lib/store';
import { C, F, R, shadow } from '../theme';

type StepId = 'hero' | 'who' | 'parent' | 'ref' | 'target' | 'goal' | 'level' | 'companion';

export default function Welcome() {
  const store = useStore();
  const [step, setStep] = useState<StepId>('hero');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [consent, setConsent] = useState(false);
  const [refLang, setRef] = useState<LangCode>('fr');
  const [target, setTarget] = useState<LangCode | null>(null);
  const [goal, setGoal] = useState<Goal>('formation');
  const [track, setTrack] = useState<ProTrack>('business');
  const [level, setLevel] = useState<Level>('A1');
  const [companionId, setCompanion] = useState<string | null>(null);
  const [err, setErr] = useState('');
  const [talking, setTalking] = useState<string | null>(null);

  const birthYear = parseInt(year, 10);
  const nowY = new Date().getFullYear();
  const age = Number.isFinite(birthYear) ? ageOf(birthYear) : NaN;
  const band = Number.isFinite(age) ? bandOf(age) : 'adult';
  const choices = useMemo(() => (Number.isFinite(age) ? companionsFor(age) : []), [age]);

  const order: StepId[] = ['hero', 'who', ...(band !== 'adult' ? ['parent' as StepId] : []), 'ref', 'target', 'goal', ...(goal !== 'remise' ? ['level' as StepId] : []), 'companion'];
  const next = () => { setErr(''); setStep(order[Math.min(order.length - 1, order.indexOf(step) + 1)]); };
  const back = () => { setErr(''); setStep(order[Math.max(0, order.indexOf(step) - 1)]); };
  const progress = order.indexOf(step) / (order.length - 1);

  const validateWho = () => {
    const n = name.trim();
    if (n.length < 2) return setErr('Indiquez un prénom ou un pseudo (2 caractères minimum).');
    const m = moderate(n, { age: Number.isFinite(age) ? age : 10, langs: ['fr', 'en', 'ar', 'es'] });
    if (!m.ok) return setErr(BLOCK_MESSAGE[band]);
    if (!Number.isFinite(birthYear) || birthYear < nowY - 100 || birthYear > nowY) return setErr('Indiquez une année de naissance valide.');
    if (age < 6) return setErr('My Language Baddy s’adresse aux enfants à partir de 6 ans, accompagnés d’un adulte.');
    next();
  };

  const validateParent = () => {
    if (band === 'teen' && !pin && !pin2) return next(); // facultatif pour les 13-17 ans
    if (!/^\d{4}$/.test(pin)) return setErr('Le code parental doit comporter 4 chiffres.');
    if (pin !== pin2) return setErr('Les deux codes ne correspondent pas.');
    if (!consent) return setErr('Le consentement du parent ou du tuteur est nécessaire.');
    next();
  };

  const finish = async () => {
    if (!target || !companionId) return;
    await store.createProfile({
      name: name.trim(), birthYear, refLang, targetLang: target, goal,
      proTrack: goal === 'pro' ? track : undefined, startLevel: goal === 'remise' ? 'A1' : level,
      companionId, pin: pin || undefined,
    });
    router.replace(goal === 'remise' ? '/placement' : '/(tabs)');
  };

  const Header = ({ title, sub }: { title: string; sub?: string }) => (
    <View>
      <Row style={{ justifyContent: 'space-between' }}>
        <Pressable onPress={back} accessibilityRole="button" accessibilityLabel="Retour" hitSlop={12}
          style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: C.card, borderWidth: 1, borderColor: C.line, alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={22} color={C.ink} />
        </Pressable>
        <View style={{ flex: 1, height: 6, backgroundColor: '#E7E4DD', borderRadius: 3, marginHorizontal: 14 }}>
          <View style={{ width: `${progress * 100}%`, height: 6, backgroundColor: C.primary, borderRadius: 3 }} />
        </View>
        <Text style={[F.small, { fontWeight: '700' }]}>{order.indexOf(step)}/{order.length - 1}</Text>
      </Row>
      <Gap h={26} />
      <T v="title">{title}</T>
      {sub ? <T v="small" style={{ marginTop: 6, fontSize: 15 }}>{sub}</T> : null}
      <Gap h={18} />
    </View>
  );
  const Error = () => (err ? <Text style={{ color: C.bad, marginTop: 10, fontWeight: '600' }}>{err}</Text> : null);

  // Un profil mineur protégé est actif : créer un autre profil demande le code parental.
  if (store.profile?.parental && store.band !== 'adult' && !store.parentUnlocked) {
    return (
      <Screen>
        <Gap h={40} />
        <View style={{ alignItems: 'center' }}><IconTile icon={ShieldCheck} size={72} color={C.primary} /></View>
        <Gap />
        <T v="title" style={{ textAlign: 'center' }}>Espace parent</T>
        <T style={{ textAlign: 'center', color: C.sub, marginTop: 6 }}>La création d’un nouveau profil est réservée au parent.</T>
        <Gap h={20} />
        <Btn title="Saisir le code parental" onPress={() => router.replace('/parental')} />
        <Gap h={10} />
        <Btn title="Retour" variant="ghost" onPress={() => router.replace('/(tabs)')} />
      </Screen>
    );
  }

  if (step === 'hero') {
    const featured = ['nadia', 'karim', 'ines', 'lina'];
    return (
      <Screen>
        <Gap h={8} />
        <Wordmark size={22} />
        <Gap h={28} />
        <View style={{ backgroundColor: C.night, borderRadius: R.xl, padding: 22, overflow: 'hidden' }}>
          <View style={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, borderRadius: 100, backgroundColor: '#ffffff0D' }} />
          <Text style={{ color: '#fff', fontSize: 30, fontWeight: '800', letterSpacing: -0.8, lineHeight: 36 }}>
            Parlez une nouvelle langue, pour de vrai.
          </Text>
          <Text style={{ color: '#CFE7E3', fontSize: 15.5, marginTop: 10, lineHeight: 22 }}>
            Un professeur particulier qui vous écoute, corrige votre prononciation et vous accompagne du premier mot à l’aisance professionnelle.
          </Text>
          <Gap h={20} />
          <Row gap={0}>
            {featured.map((id, k) => (
              <View key={id} style={{ marginLeft: k ? -12 : 0, borderRadius: 30, borderWidth: 3, borderColor: C.night }}><Avatar id={id} size={50} /></View>
            ))}
          </Row>
          <Text style={{ color: '#9FD8CF', marginTop: 10, fontWeight: '600', fontSize: 13 }}>10 compagnons, adaptés à chaque âge</Text>
        </View>
        <Gap h={16} />
        {[
          { icon: Mic, title: 'Votre voix analysée', text: 'Précision, complétude et débit, mot par mot.' },
          { icon: Headphones, title: 'Des voix naturelles', text: 'Écoute normale ou ralentie, hors connexion.' },
          { icon: Sparkles, title: 'Du niveau A1 au C2', text: 'Formation, mise à niveau ou langue de votre métier.' },
          { icon: ShieldCheck, title: 'Sûr pour toute la famille', text: 'Mode enfant, contrôle parental, langage filtré.' },
        ].map((f) => (
          <Row key={f.title} gap={14} style={{ paddingVertical: 9 }}>
            <IconTile icon={f.icon} size={42} />
            <View style={{ flex: 1 }}><Text style={{ fontWeight: '700', fontSize: 15.5 }}>{f.title}</Text><Text style={F.small}>{f.text}</Text></View>
          </Row>
        ))}
        <Gap h={14} />
        <Text style={F.label}>11 langues</Text>
        <Row style={{ flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {LANGUAGES.map((l) => (
            <View key={l.code} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: R.pill, backgroundColor: C.card, borderWidth: 1, borderColor: '#EFECE6' }}>
              <Text style={{ fontWeight: '600', fontSize: 13.5, color: C.ink }}>{l.native}</Text>
            </View>
          ))}
        </Row>
        <Gap h={28} />
        <Btn title="Commencer" iconRight={ArrowRight} onPress={next} />
        <Gap h={10} />
        <Btn title="Explorer avec des profils de démonstration" variant="ghost" icon={Users} onPress={() => { store.loadDemo(); router.replace('/(tabs)'); }} />
      </Screen>
    );
  }

  if (step === 'who') {
    return (
      <Screen>
        <Header title="Faisons connaissance" sub="L’âge permet d’adapter le compagnon, les contenus et la protection du profil." />
        <T v="label">Prénom ou pseudo</T>
        <TextInput value={name} onChangeText={setName} placeholder="Ex. Sami" style={input} maxLength={24} autoCapitalize="words" />
        <Gap />
        <T v="label">Année de naissance</T>
        <TextInput value={year} onChangeText={(t) => setYear(t.replace(/\D/g, ''))} placeholder={`Ex. ${nowY - 25}`} keyboardType="number-pad" maxLength={4} style={input} />
        {Number.isFinite(age) && age >= 6 && age < 110 ? <T v="small" style={{ marginTop: 6 }}>{age} ans · profil {BAND_LABEL[band]}</T> : null}
        <Error />
        <Gap h={24} />
        <Btn title="Continuer" onPress={validateWho} />
      </Screen>
    );
  }

  if (step === 'parent') {
    return (
      <Screen>
        <Header title={band === 'kid' ? 'Espace parent' : 'Contrôle parental'}
          sub={band === 'kid'
            ? 'Ce profil appartient à un enfant de moins de 13 ans. Un parent ou tuteur doit créer un code à 4 chiffres : il protège les réglages (âge, durée quotidienne, micro, compagnon).'
            : 'Recommandé pour les 13-17 ans : le code protège les réglages du profil. Vous pouvez passer cette étape.'} />
        <Card tone={C.goldSoft}>
          <T style={{ fontSize: 14 }}>
            Les données restent sur l’appareil. Pour la reconnaissance vocale, l’audio peut être traité par le service du système (Google, Apple ou le navigateur).
            Le micro peut être désactivé à tout moment dans l’espace parent. Les contenus et les réponses sont filtrés selon l’âge.
          </T>
        </Card>
        <Gap />
        <T v="label">Code parental</T>
        <TextInput value={pin} onChangeText={(t) => setPin(t.replace(/\D/g, ''))} secureTextEntry keyboardType="number-pad" maxLength={4} placeholder="••••" style={input} />
        <Gap h={8} />
        <TextInput value={pin2} onChangeText={(t) => setPin2(t.replace(/\D/g, ''))} secureTextEntry keyboardType="number-pad" maxLength={4} placeholder="Confirmer" style={input} />
        <Gap />
        <Pressable onPress={() => setConsent(!consent)} accessibilityRole="checkbox" accessibilityState={{ checked: consent }}>
          <Row style={{ alignItems: 'flex-start' }}>
            <View style={{ width: 24, height: 24, borderRadius: 7, borderWidth: 2, borderColor: C.primary, backgroundColor: consent ? C.primary : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
              {consent ? <Check size={16} color="#fff" strokeWidth={3} /> : null}
            </View>
            <T style={{ flex: 1, fontSize: 14 }}>Je suis le parent ou le tuteur légal et j’autorise l’utilisation de l’application, y compris du micro, pour ce profil.</T>
          </Row>
        </Pressable>
        <Error />
        <Gap h={24} />
        <Btn title="Continuer" onPress={validateParent} />
        {band === 'teen' ? <><Gap h={8} /><Btn title="Passer cette étape" variant="ghost" onPress={() => { setPin(''); setPin2(''); next(); }} /></> : null}
      </Screen>
    );
  }

  if (step === 'ref') {
    return (
      <Screen>
        <Header title="Votre langue de référence" sub="Les traductions et les explications s’afficheront dans cette langue." />
        {REFERENCE_LANGS.map((c) => (
          <Card key={c} onPress={() => setRef(c)} style={[{ marginBottom: 10 }, sel(refLang === c)]}>
            <Row><LangBadge code={c} size={40} /><View style={{ flex: 1 }}><T v="h2">{LANG[c].native}</T><T v="small">{LANG[c].name}</T></View>{refLang === c ? <Check size={20} color={C.primary} strokeWidth={3} /> : null}</Row>
          </Card>
        ))}
        <Gap h={12} />
        <Btn title="Continuer" onPress={() => { if (target === refLang) setTarget(null); next(); }} />
      </Screen>
    );
  }

  if (step === 'target') {
    return (
      <Screen>
        <Header title="Quelle langue voulez-vous parler ?" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {LANGUAGES.filter((l) => l.code !== refLang).map((l) => (
            <Pressable key={l.code} onPress={() => setTarget(l.code)} accessibilityRole="button" accessibilityState={{ selected: target === l.code }}
              style={[{ width: '48.5%', backgroundColor: C.card, borderRadius: R.l, padding: 14, borderWidth: 1.5, borderColor: target === l.code ? C.primary : '#EFECE6' },
                target === l.code ? { backgroundColor: C.primarySoft } : shadow]}>
              <LangBadge code={l.code} size={38} />
              <Text style={{ fontWeight: '800', color: C.ink, marginTop: 10, textAlign: 'left', writingDirection: 'ltr', fontSize: 15.5 }}>{l.native}</Text>
              <Text style={F.small}>{l.name}</Text>
            </Pressable>
          ))}
        </View>
        {target && LANG[target].note ? <Card tone={C.goldSoft} style={{ marginTop: 12 }}><T style={{ fontSize: 14 }}>{LANG[target].note}</T></Card> : null}
        <Gap h={20} />
        <Btn title="Continuer" disabled={!target} onPress={next} />
      </Screen>
    );
  }

  if (step === 'goal') {
    const goals = GOALS.filter((g) => !(g.id === 'pro' && band === 'kid'));
    return (
      <Screen>
        <Header title="Votre objectif" sub="Le parcours s’adapte à votre projet." />
        {goals.map((g) => (
          <Card key={g.id} onPress={() => setGoal(g.id)} style={[{ marginBottom: 10 }, sel(goal === g.id)]}>
            <Row style={{ alignItems: 'flex-start' }} gap={14}>
              <IconTile icon={g.id === 'formation' ? GraduationCap : g.id === 'remise' ? RotateCcw : BriefcaseBusiness} />
              <View style={{ flex: 1 }}><T v="h2">{g.title}</T><T v="small" style={{ fontSize: 14, marginTop: 3 }}>{g.text}</T></View>
              {goal === g.id ? <Check size={20} color={C.primary} strokeWidth={3} /> : null}
            </Row>
          </Card>
        ))}
        {goal === 'pro' ? (
          <>
            <Gap h={6} /><T v="label">Votre filière</T><Gap h={8} />
            <Row style={{ flexWrap: 'wrap', gap: 8 }}>
              {PRO_TRACKS.map((t) => <Chip key={t.id} label={t.title} icon={TRACK_ICON[t.id]} active={track === t.id} onPress={() => setTrack(t.id)} />)}
            </Row>
          </>
        ) : null}
        <Gap h={20} />
        <Btn title="Continuer" onPress={next} />
      </Screen>
    );
  }

  if (step === 'level') {
    const levels = band === 'kid' ? LEVELS.slice(0, 2) : LEVELS;
    return (
      <Screen>
        <Header title="Votre niveau actuel" sub="Choisissez « Découverte » si vous débutez. Vous pourrez passer le test de positionnement plus tard." />
        {levels.map((l) => (
          <Card key={l} onPress={() => setLevel(l)} style={[{ marginBottom: 8, paddingVertical: 14 }, sel(level === l)]}>
            <Row gap={14}><View style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: level === l ? C.primary : C.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: '800', fontSize: 16, color: level === l ? '#fff' : C.primary }}>{l}</Text></View>
              <View style={{ flex: 1 }}><Text style={{ fontWeight: '700', color: C.ink }}>{LEVEL_INFO[l].label}</Text><Text style={F.small}>{LEVEL_INFO[l].can}</Text></View></Row>
          </Card>
        ))}
        <Gap h={16} />
        <Btn title="Continuer" onPress={next} />
      </Screen>
    );
  }

  // Compagnon
  return (
    <Screen>
      <Header title="Choisissez votre compagnon" sub={`Compagnons adaptés au profil ${BAND_LABEL[band].toLowerCase()}. Touchez-en un pour l’entendre.`} />
      {choices.map((c) => (
        <Card key={c.id} onPress={() => {
          setCompanion(c.id); setTalking(c.id);
          speakCoach(c.greeting, c.voice.gender, c.voice.pitch, () => setTalking(null));
        }} style={[{ marginBottom: 12 }, sel(companionId === c.id)]}>
          <Row style={{ alignItems: 'flex-start' }}>
            <Avatar id={c.id} size={78} speaking={talking === c.id} />
            <View style={{ flex: 1 }}>
              <Row style={{ justifyContent: 'space-between' }}><T v="h2">{c.name}</T>{companionId === c.id ? <Check size={20} color={C.primary} strokeWidth={3} /> : null}</Row>
              <Text style={{ color: C.primary, fontWeight: '600', marginTop: 2 }}>{c.role}</Text>
              <T v="small" style={{ marginTop: 6, fontSize: 14 }}>{c.bio}</T>
            </View>
          </Row>
        </Card>
      ))}
      <Gap h={12} />
      <Btn title={goal === 'remise' ? 'Passer le test de positionnement' : 'Commencer à apprendre'} variant="accent" disabled={!companionId} onPress={finish} />
    </Screen>
  );
}

const input = {
  backgroundColor: C.card, borderRadius: R.m, borderWidth: 1.5, borderColor: C.line, paddingHorizontal: 16, paddingVertical: 14,
  fontSize: 17, color: C.ink, marginTop: 8,
} as const;

const sel = (on: boolean) => (on ? { borderWidth: 1.5, borderColor: C.primary, backgroundColor: C.primarySoft } : {});
