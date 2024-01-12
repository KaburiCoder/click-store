import { NextRequest, NextResponse } from "next/server";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import { sendCpmMessage } from "@/db/services/new-cpm-msg.service";
import { AsyncUtil } from "@/lib/utils/async.util";
import { getPaymentByPaymentKey } from "@/db/services/payment.service";
import { APP_ENV } from "@/configs/config";
import { formatDateToStr } from "@/lib/utils/date.util";
import { cardData } from "@/lib/datas/card-data";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "success" });
}

export async function POST(req: NextRequest) {
  await AsyncUtil.delay(3000);

  let jsonData;
  try {
    jsonData = await req.json();
    const result: TossApiResult = jsonData.data;
    const payment = await getPaymentByPaymentKey(result.paymentKey, {
      em: true,
    });

    const lines: string[] = [];
    lines.push(`----- 물품관리 웹 결제 알림 -----`);
    if (APP_ENV === "dev") lines.push("◈◈◈ 테스트 환경입니다. ◈◈◈");
    lines.push(`주문요청 : ${formatDateToStr(result.requestedAt)}`);
    if (result.approvedAt)
      lines.push(`결제완료 : ${formatDateToStr(result.approvedAt)}`);
    lines.push(`결제상태 : ${methodToEasyText(result.status)}`);
    lines.push(`------------------------------`);
    lines.push(`요양기호 : ${payment?.ykiho}`);
    lines.push(`담당자명 : ${payment?.cs?.em?.name}`);
    lines.push(`주문번호 : ${result.orderId}`);
    lines.push(`구 매 자 : ${payment?.customerName}`);
    lines.push(`구매상품 : ${result.orderName}`);
    lines.push(`결제방식 : ${result.method}`);
    lines.push(`------------------------------`);
    if (result.easyPay) {
      lines.push(`간편결제 : ${result.easyPay.provider}`);
      lines.push(`------------------------------`);
    }
    if (result.card) {
      const card = result.card;
      const instMonth = card?.installmentPlanMonths;
      lines.push(`카드종류 : ${cardData[card?.issuerCode ?? ""]}`);
      lines.push(`카드번호 : ${card?.number}`);
      lines.push(`할부 : ${instMonth ? `${instMonth}개월` : "일시불"} `);
      lines.push(`승인번호 : ${card?.approveNo}`);
      lines.push(`------------------------------`);
    }
    lines.push(`결제금액 : ${result.totalAmount.toLocaleString()}`);
    lines.push(`영수증 URL : ${result.receipt.url}`);
    if (result.cashReceipt)
      lines.push(`현금영수증 URL : ${result.cashReceipt?.receiptUrl}`);

    await sendCpmMessage({ recUser: "047", msg: lines.join("\n") });

    if (result.method) return NextResponse.json({ state: "success" });
  } catch (error) {
    console.error({ state: "error", error, jsonData });
    return NextResponse.json({ error });
  }
}

function methodToEasyText(status: string) {
  switch (status) {
    case "READY":
      return "결제 준비";
    case "IN_PROGRESS":
      return "결제 소유자 인증 완료";
    case "WAITING_FOR_DEPOSIT":
      return "결제 대기";
    case "DONE":
      return "결제 완료";
    case "CANCELED":
      return "결제 취소";
    case "ABORTED":
      return "결제 승인 실패";
    case "EXPIRED":
      return "결제 유효 시간 30분이 지나 거래가 취소";
  }
}
