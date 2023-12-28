export const TOSS_CLIENT_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_TOSSPAYMENTS_CLIENT_KEY
    : process.env.NEXT_PUBLIC_TOSSPAYMENTS_TEST_CLIENT_KEY;
