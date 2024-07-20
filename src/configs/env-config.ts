'use server';

import { APP_ENV, APP_URL, EnvData, NEST_URL, TOSS_CLIENT_KEY, TOSS_SECRET_KEY } from "./config";

export async function getEnv(): Promise<EnvData> {
  return {
    APP_ENV, APP_URL, NEST_URL, TOSS_SECRET_KEY, TOSS_CLIENT_KEY,
    SMTP_SERVICE: process.env.SMTP_SERVICE ?? "",
    SMTP_HOST: process.env.SMTP_HOST ?? "",
    SMTP_PORT: +(process.env.SMTP_PORT ?? 0),
    SMTP_AUTH_USER: process.env.SMTP_AUTH_USER ?? "",
    SMTP_AUTH_PASS: process.env.SMTP_AUTH_PASS ?? "",
  };
}

