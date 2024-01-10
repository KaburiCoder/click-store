import {
  cancelPaymentByOrderId,
  updateComplete,
} from "@/db/services/payment.service";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const paramsText = await req.text();
    const params = new URLSearchParams(paramsText);
    const orderId = params.get("oid");
    const txtype: TxType = params.get("txtype") as TxType;
    const resdate = params.get("resdate");

    if (!orderId) {
      return NextResponse.json({ errorMessage: "orderId 누락" });
    }

    const resDateStr = dayjs(resdate, "YYYYMMDDHHmmss").format(
      "YYYY-MM-DD HH:mm:ss",
    );

    console.log(
      `orderId: ${orderId}, txtype: ${txtype}, 처리시간: ${resDateStr}`,
    );

    switch (txtype) {
      case TxType.구매취소결과:
        await cancelPaymentByOrderId(orderId);
        break;
      case TxType.수령확인결과:
      case TxType.NegativeConfirm:
        await updateComplete({ orderId });
        // 배송완료처리하기
        break;
    }
  } catch (error: any) {
    return NextResponse.json({ errorMessage: error.message });
  }

  return NextResponse.json({ message: "success" });
}

enum TxType {
  /** 배송 완료 등록 후 고객에게 보내지는 이메일에서 수령확인을 했을 때 */
  수령확인결과 = "C",
  /** 배송 완료 등록 후 고객에게 보내지는 이메일에서 구매취소 요청을 했을 때 */
  구매취소요청 = "R",
  /** 고객이 구매취소 요청을 한후 상점에서 요청을 받아주어 취소가 되었을 때 */
  구매취소결과 = "D",
  /** 배송정보 등록을 한 뒤, 택배사 배송정보에서 배송완료가 되었을 때 */
  택배사배송완료 = "S",
  /** 자동 구매 확정 */
  NegativeConfirm = "N",
}
