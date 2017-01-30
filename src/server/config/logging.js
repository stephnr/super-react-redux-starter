import winston from 'winston';

// ────────────────────────────────────────────────────────────────────────────────
// CONFIGURE LOGGER

winston.configure({
  transports: [
    new (winston.transports.Console)(),
  ],
});

// ────────────────────────────────────────────────────────────────────────────────

export default winston;
