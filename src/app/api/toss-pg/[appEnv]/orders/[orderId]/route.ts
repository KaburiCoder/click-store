import { getTossSecretKeyByAppEnv } from "@/configs/config";
import { convertTossSkToToken } from "@/lib/utils/toss-pg.util";
import { NextRequest, NextResponse } from "next/server";

const url = "https://api.tosspayments.com/v1/payments/orders";
export async function GET(
  req: NextRequest,
  {
    params: { appEnv, orderId },
  }: { params: { appEnv: string; orderId: string } },
) {
  const sk = getTossSecretKeyByAppEnv(appEnv);
  const tossToken = convertTossSkToToken(sk);

  const response = await fetch(`${url}/${orderId}`, {
    headers: {
      Authorization: `Basic ${tossToken}`,
    },
  });
  const data = await response.json();

  return NextResponse.json(data);
}
