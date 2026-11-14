import React, { useState } from 'react';
import { Alert, Platform, Pressable, Switch, View } from 'react-native';
import { router } from 'expo-router';
import { Check, ChevronDown, Headphones, Info, Languages, Lock, ShieldCheck, Trash2, UserPlus, Users } from 'lucide-react-native';
import { Avatar } from '../../components/Avatar';
import { Text } from '../../components/Text';
import { Btn, Card, Chip, Gap, LangBadge, ListItem, Row, Screen, Section, T } from '../../components/ui';
import { BAND_LABEL } from '../../data/companions';
import { GOALS, PRO_TRACKS } from '../../data/curriculum';
import { INTENSITIES, TONES } from '../../data/coachLines';
import { LANGUAGES, LANG, LangCode, REFERENCE_LANGS } from '../../data/languages';
import type { Settings } from '../../lib/db';
import { useStore } from '../../lib/store';
import { C, F, R } from '../../theme';

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
  const mastered = Object.values(progress.cards).filter((c) => c.box >= 3).length;

  return (
    <Screen>
      <T v="title">Profil</T>
      <Gap h={16} />
      <Card>
        <Row gap={14}>
          <Avatar id={profile.companionId} size={64} />
          <View style={{ flex: 1 }}>
            <T v="h2">{profile.name}</T>
            <T v="small">{age} ans · {BAND_LABEL[band]}{profile.demo ? ' · démonstration' : ''}</T>
            <T v="small">{GOALS.find((g) => g.id === profile.goal)?.title}{profile.proTrack ? ` · ${PRO_TRACKS.find((t) => t.id === profile.proTrack)?.title}` : ''}</T>
          </View>
        </Row>
        <View style={{ height: 1, backgroundColor: C.line, marginVertical: 16 }} />
        <Row style={{ justifyContent: 'space-around' }}>
          <Stat n={currentLevel} l="niveau CECRL" /><Stat n={String(Object.keys(progress.units).length)} l="unités terminées" /><Stat n={String(mastered)} l="phrases maîtrisées" />
        </Row>
      </Card>

      <Section title="Langues" />
      <Card style={{ paddingVertical: 2 }}>
        <Pressable onPress={() => setLangOpen(!langOpen)} style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 14 }}>
          <LangBadge code={profile.targetLang} size={40} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700', fontSize: 15.5 }}>{LANG[profile.targetLang].name}</Text>
            <Text style={F.small}>Langue étudiée · la progression de chaque langue est conservée</Text>
          </View>
          <ChevronDown size={20} color={C.muted} style={{ transform: [{ rotate: langOpen ? '180deg' : '0deg' }] }} />
        </Pressable>
        {langOpen ? (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingBottom: 14 }}>
            {LANGUAGES.filter((l) => l.code !== profile.refLang).map((l) => (
              <Chip key={l.code} label={l.name} active={l.code === profile.targetLang} color={l.color}
                onPress={() => { s.updateProfile({ targetLang: l.code }); setLangOpen(false); }} />
            ))}
          </View>
        ) : null}
        <View style={{ height: 1, backgroundColor: '#F1EEE8' }} />
        <View style={{ paddingVertical: 14 }}>
          <Row gap={8}><Languages size={16} color={C.sub} /><Text style={F.small}>Traductions affichées en</Text></Row>
          <Row style={{ flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
            {REFERENCE_LANGS.filter((c) => c !== profile.targetLang).map((c: LangCode) => (
              <Chip key={c} label={LANG[c].native} active={profile.refLang === c} onPress={() => s.updateProfile({ refLang: c })} />
            ))}
          </Row>
        </View>
      </Card>

      <Section title="Mode professeur" />
      <Card>
        <Text style={F.label}>Ton</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {TONES.map((t) => {
            const on = teacher.tone === t.id;
            return (
              <Pressable key={t.id} onPress={() => s.updateProfile({ settings: { ...profile.settings, teacher: { ...teacher, tone: t.id } } })}
                style={{ width: '48.5%', padding: 12, borderRadius: R.m, borderWidth: 1.5, borderColor: on ? C.primary : C.line, backgroundColor: on ? C.primarySoft : C.card }}>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Text style={{ fontWeight: '800', color: on ? C.primaryDark : C.ink }}>{t.label}</Text>
                  {on ? <Check size={16} color={C.primary} strokeWidth={3} /> : null}
                </Row>
                <Text style={[F.small, { marginTop: 4, fontSize: 12 }]}>{t.text}</Text>
              </Pressable>
            );
          })}
        </View>
        <Text style={[F.label, { marginTop: 18 }]}>Intensité</Text>
        <View style={{ flexDirection: 'row', backgroundColor: '#F1EFEA', borderRadius: R.m, padding: 4, marginTop: 10 }}>
          {INTENSITIES.map((n) => {
            const on = teacher.intensity === n.id;
            return (
              <Pressable key={n.id} onPress={() => s.updateProfile({ settings: { ...profile.settings, teacher: { ...teacher, intensity: n.id } } })}
                style={{ flex: 1, paddingVertical: 10, borderRadius: R.s, backgroundColor: on ? C.card : 'transparent', alignItems: 'center' }}>
                <Text style={{ fontWeight: on ? '800' : '600', color: on ? C.ink : C.sub }}>{n.label}</Text>
              </Pressable>
            );
          })}
        </View>
        <T v="small" style={{ marginTop: 10 }}>
          {teacher.intensity === 1 ? 'Le compagnon intervient seulement pour corriger et féliciter.'
            : teacher.intensity === 2 ? 'Le compagnon donne aussi les consignes.'
            : 'Le compagnon accompagne chaque étape : consignes, retours, astuces.'}
        </T>
      </Card>

      <Section title="Écoute et affichage" />
      <Card style={{ paddingVertical: 2 }}>
        <ListItem icon={Headphones} title="Voix et écoute" subtitle="Choisir la voix, la tester, améliorer celle de l’appareil" onPress={() => router.push('/voices')} />
        <Toggle label="Lecture automatique des phrases" v={profile.settings.autoPlay} on={set('autoPlay')} />
        <Toggle label="Audio ralenti par défaut" v={profile.settings.slowAudio} on={set('slowAudio')} />
        <Toggle label="Transcription (pinyin, rōmaji…)" v={profile.settings.showRomanization} on={set('showRomanization')} />
        <Toggle label="Le compagnon parle à voix haute" v={profile.settings.coachVoice} on={set('coachVoice')} last />
      </Card>

      <Section title="Sécurité" />
      <Card style={{ paddingVertical: 2 }}>
        <ListItem icon={ShieldCheck} color={C.ok} title="Espace parent et protection"
          subtitle={profile.parental ? 'Protégé par code · durée, micro, compagnon, âge' : 'Ajouter un code parental'} onPress={() => router.push('/parental')} last />
      </Card>
      <T v="small" style={{ marginTop: 10 }}>
        Filtre de langage actif : grossièretés, insultes et propos haineux bloqués pour tous{band !== 'adult' ? ' ; alcool, jeux d’argent et armes bloqués pour ce profil mineur' : ''}.
        Les données restent sur l’appareil.
      </T>

      <Section title="Profils sur cet appareil" />
      <Card style={{ paddingVertical: 2 }}>
        {db.profiles.map((p, k) => (
          <Pressable key={p.id} disabled={p.id === profile.id || locked} onPress={() => s.switchProfile(p.id)}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, borderBottomWidth: k < db.profiles.length - 1 ? 1 : 0, borderColor: '#F1EEE8' }}>
            <Avatar id={p.companionId} size={40} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '700' }}>{p.name}{p.demo ? ' · démo' : ''}</Text>
              <Text style={F.small}>{LANG[p.targetLang].name}</Text>
            </View>
            {p.id === profile.id ? <View style={{ backgroundColor: C.primarySoft, paddingHorizontal: 10, paddingVertical: 4, borderRadius: R.pill }}><Text style={{ color: C.primaryDark, fontWeight: '700', fontSize: 12 }}>Actif</Text></View>
              : locked ? <Lock size={16} color={C.muted} /> : null}
          </Pressable>
        ))}
      </Card>
      {locked ? <T v="small" style={{ marginTop: 10 }}>Le changement de profil est protégé : passez par l’espace parent.</T> : (
        <>
          <Gap h={12} />
          <Row>
            <Btn style={{ flex: 1 }} small title="Nouveau profil" variant="soft" icon={UserPlus} onPress={() => router.push('/welcome')} />
            <Btn style={{ flex: 1 }} small title="Profils démo" variant="ghost" icon={Users} onPress={() => s.loadDemo()} />
          </Row>
          <Gap h={22} />
          <Pressable onPress={() => confirm('Effacer tous les profils et la progression de cet appareil ?', () => { s.resetAll(); router.replace('/welcome'); })}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingVertical: 10 }}>
            <Trash2 size={16} color={C.bad} /><Text style={{ color: C.bad, fontWeight: '700' }}>Effacer toutes les données</Text>
          </Pressable>
        </>
      )}
      <Gap h={8} />
      <Card style={{ paddingVertical: 2 }}>
        <ListItem icon={Info} color={C.sub} title="À propos et licences" subtitle="Crédits des voix, illustrations et polices" onPress={() => router.push('/about')} last />
      </Card>
      <Gap h={16} />
      <T v="small" style={{ textAlign: 'center', color: C.muted }}>My Language Baddy · version 1.0</T>
    </Screen>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return <View style={{ alignItems: 'center', flex: 1 }}><Text style={{ fontSize: 22, fontWeight: '800', color: C.ink }}>{n}</Text><Text style={[F.small, { fontSize: 12, textAlign: 'center' }]}>{l}</Text></View>;
}

function Toggle({ label, v, on, last }: { label: string; v: boolean; on: (v: boolean) => void; last?: boolean }) {
  return (
    <Row style={{ justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: last ? 0 : 1, borderColor: '#F1EEE8' }}>
      <Text style={{ flex: 1, color: C.ink, fontSize: 15 }}>{label}</Text>
      <Switch value={v} onValueChange={on} trackColor={{ true: C.primary, false: '#DDD9D1' }} thumbColor="#fff" accessibilityLabel={label} />
    </Row>
  );
}
