import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateDistance, formatDistance } from '../src/utils/location.js';

test('calculateDistance returns a sensible distance in meters', () => {
  const distance = calculateDistance(15.4989, 73.8278, 15.5000, 73.8285);
  assert.ok(distance > 0);
  assert.ok(distance < 200);
});

test('formatDistance formats meters and kilometers correctly', () => {
  assert.equal(formatDistance(850), '850 m');
  assert.equal(formatDistance(2500), '2.5 km');
});
