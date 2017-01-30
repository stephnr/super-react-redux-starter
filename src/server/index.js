// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import dotenv from 'dotenv';
import http from 'http';

import app from './app';
import {
  log,
} from './config';

// ────────────────────────────────────────────────────────────────────────────────

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

/* ----------  BUILDING WEB SERVER  ---------- */
const appServer = http.createServer(app);
const port = process.env.PORT || 8000;

/* ----------  EXECUTE SERVER  ---------- */
appServer.listen(port, () => {
  log.info(`Web Server Environment: ${process.env.NODE_ENV}`);
  log.info(`Web server listening on port ${process.env.PORT}`);
  log.info('Web server started');
});
