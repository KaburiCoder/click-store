import { NextRequest, NextResponse } from "next/server";
import { TossApiResult } from "@/db/interfaces/toss-api-result";
import { sendCpmMessage } from "@/db/services/new-cpm-msg.service";
import { AsyncUtil } from "@/lib/utils/async.util";
import { tossResultToText } from "@/db/services/toss-payments/toss-result-to-text";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "success" });
}

export async function POST(req: NextRequest) {
  await AsyncUtil.delay(3000);

  let jsonData;
  try {
    jsonData = await req.json();
    const result: TossApiResult = jsonData.data;
    // 토스에서 넘어온 정보를 문자형태로 변환한다.
    const message = await tossResultToText(result);

    // 클릭 쪽지로 전송한다.
    await sendCpmMessage({ recUser: "047", msg: message });

    if (result.method) return NextResponse.json({ state: "success" });
  } catch (error) {
    console.error({ state: "error", error, jsonData });
    return NextResponse.json({ error });
  }
}
