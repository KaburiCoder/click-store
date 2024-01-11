import { NextRequest, NextResponse } from "next/server";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import dayjs from "dayjs";
import { sendCpmMessage } from "@/db/services/new-cpm-msg.service";
import { resultWrapper2 } from "@/lib/utils/callback.util";
import { AsyncUtil } from "@/lib/utils/async.util";
import { getPaymentByPaymentKey } from "@/db/services/payment.service";
import { APP_ENV } from "@/configs/config";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "success" });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const result: TossApiResult = data.data;

  await AsyncUtil.delay(3000);

  const payment = await getPaymentByPaymentKey(result.paymentKey, { em: true });
  const testingText = APP_ENV === 'dev' ? "◈◈◈ 테스트 환경입니다. ◈◈◈" : "";
  const approvedText = result.approvedAt
    ? `\n결제완료 : ${dayjs(result.approvedAt).format("YYYY-MM-DD HH:mm:ss")}`
    : "";
  const cashUrl = result.cashReceipt
    ? `\n현금영수증 URL : ${result.cashReceipt?.receiptUrl}`
    : "";
  const message = `----- 물품관리 웹 결제 알림 -----
${testingText}
주문요청 : ${dayjs(result.requestedAt).format(
    "YYYY-MM-DD HH:mm:ss",
  )}${approvedText}
주문번호 : ${result.orderId}
상품명칭 : ${result.orderName}

요양기호 : ${payment.ykiho}
거래처명 : ${payment.customerName}
담당자명 : ${payment.cs?.em?.name}

결제상태 : ${methodToEasyText(result.status)}
결제수단 : ${result.method}
결제금액 : ${result.totalAmount.toLocaleString()}

영수증 URL : ${result.receipt.url}${cashUrl}
`;

  const { errorMessage } = await resultWrapper2(
    sendCpmMessage({ recUser: "047", msg: message }),
  );

  if (errorMessage) {
    console.table({
      hookName: "payment-status-changed-hook",
      errorMessage,
    });
  }

  if (result.method) return NextResponse.json({ message: "success" });
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
