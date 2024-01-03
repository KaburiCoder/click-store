import { getPaymentOrders } from "@/db/services/toss-payments/get-payment-orders";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  {
    params: { appEnv, orderId },
  }: { params: { appEnv: "dev" | "prod"; orderId: string } },
) {
  const data = await getPaymentOrders({ appEnv, orderId });

  return NextResponse.json(data);
}
