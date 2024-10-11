export const envs = {
  PORT: process.env.PORT || "",
  MAILER_SERVICE: process.env.MAILER_SERVICE || "",
  MAILER_EMAIL: process.env.MAILER_EMAIL || "",
  MAILER_SECRET_KEY: process.env.MAILER_SECRET_KEY || "",
  WEB_SERVICE: process.env.WEB_SERVICE || "",

  DATABASE_URL: process.env.DATABASE_URL || "",
  JWT_SEED: process.env.JWT_SEED || "",
  NODE_ENV: process.env.NODE_ENV || ""
};
