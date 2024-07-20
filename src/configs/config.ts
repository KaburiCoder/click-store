export const getTossSecretKeyByAppEnv = (appEnv: string): string => {
  return appEnv === "prod"
    ? process.env.TOSSPAYMENTS_SECRET_KEY!
    : process.env.TOSSPAYMENTS_TEST_SECRET_KEY!;
};

export interface EnvData {
  APP_ENV: string;
  APP_URL: string;
  NEST_URL: string;
  TOSS_SECRET_KEY: string;
  TOSS_CLIENT_KEY: string;
}

export const APP_ENV: "prod" | "dev" = process.env.NEXT_PUBLIC_APP_ENV! as
  | "prod"
  | "dev";
export const APP_URL =
  (APP_ENV === "prod" ? "https://" : "http://") +
  process.env.NEXT_PUBLIC_CLICK_DOMAIN;

export const NEST_URL =
  (APP_ENV === "prod" ? "https://" : "http://") +
  process.env.NEXT_PUBLIC_NEST_DOMAIN;

export const TOSS_SECRET_KEY = getTossSecretKeyByAppEnv(APP_ENV);

export const TOSS_CLIENT_KEY =
  APP_ENV === "prod"
    ? process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY!
    : process.env.NEXT_PUBLIC_TOSSPAYMENTS_TEST_CLIENT_KEY!;