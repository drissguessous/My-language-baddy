import React, { useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Avatar } from '../components/Avatar';
import { Btn, Card, Chip, Gap, LangBadge, Row, Screen, T } from '../components/ui';
import { COMPANIONS, BAND_LABEL, ageOf, bandOf, companionsFor } from '../data/companions';
import { GOALS, Goal, LEVELS, LEVEL_INFO, Level, PRO_TRACKS, ProTrack } from '../data/curriculum';
import { LANGUAGES, LANG, LangCode, REFERENCE_LANGS } from '../data/languages';
import { BLOCK_MESSAGE, moderate } from '../lib/safety/filter';
import { speakCoach } from '../lib/speech';
import { useStore } from '../lib/store';
import { C, F, R } from '../theme';

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
        <Pressable onPress={back} accessibilityRole="button" accessibilityLabel="Retour"><Text style={{ fontSize: 22, color: C.primary }}>‹ Retour</Text></Pressable>
        <Text style={F.small}>{order.indexOf(step)}/{order.length - 1}</Text>
      </Row>
      <View style={{ height: 6, backgroundColor: C.line, borderRadius: 3, marginTop: 10 }}>
        <View style={{ width: `${progress * 100}%`, height: 6, backgroundColor: C.accent, borderRadius: 3 }} />
      </View>
      <Gap h={20} />
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
        <Text style={{ fontSize: 48, textAlign: 'center' }}>🛡️</Text>
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
    return (
      <Screen>
        <Gap h={24} />
        <Row style={{ justifyContent: 'center', gap: -10 }}>
          {[COMPANIONS[0], COMPANIONS[5], COMPANIONS[2], COMPANIONS[8]].map((c, i) => (
            <View key={c.id} style={{ marginTop: i % 2 ? 18 : 0 }}><Avatar spec={c.avatar} size={86} /></View>
          ))}
        </Row>
        <Gap h={24} />
        <Text style={{ fontSize: 38, fontWeight: '900', color: C.ink, textAlign: 'center', letterSpacing: -1 }}>
          My Language <Text style={{ color: C.accent }}>Baddy</Text>
        </Text>
        <T style={{ textAlign: 'center', marginTop: 10, color: C.sub, fontSize: 17 }}>
          Un compagnon qui vous écoute, vous corrige et vous fait progresser, de vos premiers mots jusqu’à l’aisance professionnelle.
        </T>
        <Gap h={18} />
        <Row style={{ flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {LANGUAGES.map((l) => <LangBadge key={l.code} code={l.code} size={34} />)}
        </Row>
        <Gap h={10} />
        <T v="small" style={{ textAlign: 'center' }}>11 langues · niveaux A1 à C2 · oral et écrit · filières métiers</T>
        <Gap h={30} />
        <Btn title="Créer mon profil" onPress={next} />
        <Gap h={10} />
        <Btn title="Découvrir avec des profils de démonstration" variant="ghost" onPress={() => { store.loadDemo(); router.replace('/(tabs)'); }} />
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
            <View style={{ width: 24, height: 24, borderRadius: 6, borderWidth: 2, borderColor: C.primary, backgroundColor: consent ? C.primary : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
              {consent ? <Text style={{ color: '#fff', fontWeight: '900' }}>✓</Text> : null}
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
          <Card key={c} onPress={() => setRef(c)} style={{ marginBottom: 10, borderWidth: 2, borderColor: refLang === c ? C.primary : 'transparent' }}>
            <Row><LangBadge code={c} /><T v="h2">{LANG[c].native}</T><T v="small">{LANG[c].name}</T></Row>
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
              style={{ width: '48%', backgroundColor: C.card, borderRadius: R.m, padding: 12, borderWidth: 2, borderColor: target === l.code ? l.color : C.line }}>
              <Row><LangBadge code={l.code} size={32} /><View style={{ flex: 1 }}><Text style={{ fontWeight: '700', color: C.ink }}>{l.name}</Text><Text style={F.small}>{l.native}</Text></View></Row>
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
          <Card key={g.id} onPress={() => setGoal(g.id)} style={{ marginBottom: 10, borderWidth: 2, borderColor: goal === g.id ? C.primary : 'transparent' }}>
            <T v="h2">{g.title}</T><T v="small" style={{ fontSize: 15, marginTop: 4 }}>{g.text}</T>
          </Card>
        ))}
        {goal === 'pro' ? (
          <>
            <Gap h={6} /><T v="label">Votre filière</T><Gap h={8} />
            <Row style={{ flexWrap: 'wrap', gap: 8 }}>
              {PRO_TRACKS.map((t) => <Chip key={t.id} label={`${t.icon} ${t.title}`} active={track === t.id} onPress={() => setTrack(t.id)} />)}
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
          <Card key={l} onPress={() => setLevel(l)} style={{ marginBottom: 8, borderWidth: 2, borderColor: level === l ? C.primary : 'transparent' }}>
            <Row><Text style={{ fontWeight: '900', fontSize: 18, color: C.primary, width: 36 }}>{l}</Text>
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
        }} style={{ marginBottom: 12, borderWidth: 2, borderColor: companionId === c.id ? C.accent : 'transparent' }}>
          <Row style={{ alignItems: 'flex-start' }}>
            <Avatar spec={c.avatar} size={78} speaking={talking === c.id} />
            <View style={{ flex: 1 }}>
              <T v="h2">{c.name}</T>
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
  backgroundColor: C.card, borderRadius: R.m, borderWidth: 1.5, borderColor: C.line, paddingHorizontal: 14, paddingVertical: 12,
  fontSize: 17, color: C.ink, marginTop: 6,
} as const;
