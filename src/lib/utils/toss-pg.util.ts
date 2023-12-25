import dayjs from "dayjs";

export function getOrderId() {
  const currentDt = dayjs(new Date()).format("YYMMDDHHmmssSSS");
  const randInt = Math.floor(Math.random() * 10000);
  return `${currentDt}${randInt}`;
}

export const getTossPaymentsSecretKey = (isTest?: boolean) => {
  return isTest
    ? process.env.NEXT_PUBLIC_TOSS_PAYMENTS_TEST_SECRET_KEY
    : process.env.NEXT_PUBLIC_TOSS_PAYMENTS_SECRET_KEY;
};

export const getTossPaymentsHeaders = (isTest?: boolean) => {
  const tossSecretKey = getTossPaymentsSecretKey(isTest);
  const tossToken = Buffer.from(tossSecretKey + ":").toString("base64");
  const headers: { [key: string]: string } = {
    Authorization: `Basic ${tossToken}`,
    "Content-Type": "application/json",
  };
  return headers;
};

export const getCancelUrl = (paymentKey: string) => {
  return `https://api.tosspayments.com/v1/payments/${paymentKey}/cancel`;
};

export const TOSS_CONFIRM_URL =
  "https://api.tosspayments.com/v1/payments/confirm";
