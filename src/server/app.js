// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import express from 'express';

import {
  Middleware,
  Routes,
} from './config';

// ────────────────────────────────────────────────────────────────────────────────

const app = express();

/* ----------  BUILDING EXPRESS APP COMPONENTS  ---------- */
Middleware(app);
Routes(app);
/* ----------- END BUILDING EXPRESS APP COMPONENTS ----------- */

export default app;
