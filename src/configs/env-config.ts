'use server';

import { APP_ENV, APP_URL, EnvData, NEST_URL, TOSS_CLIENT_KEY, TOSS_SECRET_KEY, getTossSecretKeyByAppEnv } from "./config";

export async function getEnv(): Promise<EnvData> {
  return { APP_ENV, APP_URL, NEST_URL, TOSS_SECRET_KEY, TOSS_CLIENT_KEY };
}

