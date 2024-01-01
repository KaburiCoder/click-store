"use server";
import { getTossSecretKeyByAppEnv } from "@/configs/config";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import { convertTossSkToToken } from "@/lib/utils/toss-pg.util";

const url = "https://api.tosspayments.com/v1/payments/orders";

export interface PaymentOrdersArgs {
  appEnv: "dev" | "prod";
  orderId: string;
}

export async function getPaymentOrders({
  appEnv,
  orderId,
}: PaymentOrdersArgs): Promise<TossApiResult> {
  const sk = getTossSecretKeyByAppEnv(appEnv);
  const tossToken = convertTossSkToToken(sk);

  const response = await fetch(`${url}/${orderId}`, {
    headers: {
      Authorization: `Basic ${tossToken}`,
    },
    cache: "no-cache",
  });
  const data = await response.json();

  return data;
}
