import { NextRequest, NextResponse } from "next/server";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import { sendCpmMessage } from "@/db/services/new-cpm-msg.service";
import { AsyncUtil } from "@/lib/utils/async.util";
import { tossResultToText } from "@/db/services/toss-payments/toss-result-to-text";
import { APP_ENV } from "@/configs/config";
import { getPaymentByPaymentKey } from "@/db/services/payment.service";

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
    // 토스에서 넘어온 정보를 문자형태로 변환한다.
    const message = await tossResultToText(payment, result);

    // 클릭 쪽지로 전송한다.
    await sendCpmMessage({ recUser: "047", msg: message });

    // 실서버 환경인 경우 담당자에게 쪽지를 전송한다.
    const emCode = payment.cs?.em?.code;
    if (APP_ENV === "prod" && emCode && emCode !== "001") {
      // 001 대표님 제외. 어차피 사무실 고정코드라 하드코딩 ^^
      // 클릭 쪽지로 전송한다.
      await sendCpmMessage({ recUser: emCode, msg: message });
    }

    if (result.method) return NextResponse.json({ state: "success" });
  } catch (error) {
    console.error({ state: "error", error, jsonData });
    return NextResponse.json({ error });
  }
}
