const Sentry = require("@sentry/node");

const { env } = require("./config");

const SENTRY_DSN = env("SENTRY_DSN");

Sentry.init({ dsn: SENTRY_DSN });

myUndefinedFunction();
