import { test } from 'node:test';
import assert from 'node:assert/strict';
import { VOICE_GUIDE } from '../src/data/voiceGuide';

test('chaque système a un guide avec source', () => {
  for (const [os, g] of Object.entries(VOICE_GUIDE)) {
    assert.ok(g.steps.length >= 1, os);
    assert.match(g.source, /^https:\/\//, os);
  }
});

test('détection du système depuis le navigateur', async () => {
  const { detectFromUA } = await import('../src/data/voiceGuide');
  assert.equal(detectFromUA('Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit Chrome/130 Mobile'), 'samsung');
  assert.equal(detectFromUA('Mozilla/5.0 (Linux; Android 14; Pixel 8) Chrome/130 Mobile'), 'android');
  assert.equal(detectFromUA('Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) Safari'), 'ios');
  assert.equal(detectFromUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari', 5), 'ios');
  assert.equal(detectFromUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Safari', 0), 'macos');
  assert.equal(detectFromUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edg/130'), 'windows');
  assert.equal(detectFromUA('Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) Chrome/130'), 'chromeos');
});
