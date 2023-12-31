export const APP_ENV: "prod" | "dev" = process.env.NEXT_PUBLIC_APP_ENV! as
  | "prod"
  | "dev";

export const getTossSecretKeyByAppEnv = (appEnv: string): string => {
  return appEnv === "prod"
    ? process.env.TOSSPAYMENTS_SECRET_KEY!
    : process.env.TOSSPAYMENTS_TEST_SECRET_KEY!;
};

export const TOSS_SECRET_KEY = getTossSecretKeyByAppEnv(APP_ENV);

export const TOSS_CLIENT_KEY =
  APP_ENV === "prod"
    ? process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY!
    : process.env.NEXT_PUBLIC_TOSSPAYMENTS_TEST_CLIENT_KEY!;
