// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import dotenv from 'dotenv';
import app from '../../bin/server/app';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

// ────────────────────────────────────────────────────────────────────────────────

exports.app = () => {
  return app;
};
