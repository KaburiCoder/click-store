export const TOSS_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? process.env.TOSSPAYMENTS_SECRET_KEY
    : process.env.TOSSPAYMENTS_TEST_SECRET_KEY;
