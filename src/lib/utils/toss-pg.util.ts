import { TOSS_SECRET_KEY } from "@/configs/config";
import dayjs from "dayjs";

export function getOrderId() {
  const currentDt = dayjs(new Date()).format("YYMMDDHHmmssSSS");
  const randInt = Math.floor(Math.random() * 10000);
  return `${currentDt}${randInt}`;
}

export function convertTossSkToToken(sk: string) {
  return Buffer.from(sk + ":").toString("base64");
}

export const getTossPaymentsHeaders = (isTest?: boolean) => {
  const tossToken = convertTossSkToToken(TOSS_SECRET_KEY);
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
