// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import test from 'ava';
import request from 'supertest';

import { app } from './_utils';

// ────────────────────────────────────────────────────────────────────────────────

test('Server exists', (t) => {
  t.truthy(app);
});

test('Server has root view path', (t) => {
  request(app).get('/').end((err, res) => {
    t.is(res.status, 200);
  });
});

