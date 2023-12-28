"use server";
import { NextRequest, NextResponse } from "next/server";
import { WebHookDto } from "./_dto/web-hook.dto";
import { updateOrdered } from "@/db/services/payment.service";
import { resultWrapper2 } from "@/lib/utils/callback.util";
import dayjs from "dayjs";

// export function GET(req: NextRequest) {
//   return NextResponse.json({ name: "gdsaffdsa" });
// }

export async function POST(req: NextRequest) {
  const result: WebHookDto = await req.json();
  const { status, createdAt, orderId } = result;

  if (status !== "DONE") {
    return NextResponse.json({
      message: "가상계좌 웹 훅",
      result: { ...result },
    });
  }

  // 가상계좌 주문확인 업데이트
  const updateResult = await resultWrapper2(
    updateOrdered({ orderId, approvedAt: createdAt }),
  );

  if (updateResult.errorMessage) {
    return NextResponse.json({ message: updateResult.errorMessage });
  }

  return NextResponse.json({ success: true });
}
