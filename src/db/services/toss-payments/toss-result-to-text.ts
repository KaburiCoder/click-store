"use server";

import { TossApiResult } from "@/db/interfaces/toss-api-result";
import { getPaymentByPaymentKey } from "../payment.service";
import { formatDateToStr } from "@/lib/utils/date.util";
import { APP_ENV } from "@/configs/config";
import { cardData } from "@/lib/datas/card-data";
import { Payment } from "@/db/models/payment";

export async function tossResultToText(
  payment: Payment,
  result: TossApiResult,
) {
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

  return lines.join("\n");
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
