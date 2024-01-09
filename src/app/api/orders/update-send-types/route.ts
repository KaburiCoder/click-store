import { Payment } from "@/db/models/payment";
import { PaymentItem } from "@/db/models/payment-item";
import { fetchTracking } from "@/db/queries/fetch-tracking";
import {
  addProductOfPayments,
  getImcompletedPayments,
  cancelByPayments,
  updateCompleteByPayments,
} from "@/db/services/payment.service";
import { getPaymentOrders } from "@/db/services/toss-payments/get-payment-orders";
import { resultWrapper2 } from "@/lib/utils/callback.util";
import { subtract9HoursByObject } from "@/lib/utils/date.util";
import { bigoToTrackings } from "@/lib/utils/tracking.util";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const { afterDays } = await req.json();
    if (typeof afterDays !== "number") {
      throw new Error("매개변수가 올바르지 않습니다.");
    }

    let imcompletedPayments = await getImcompletedPayments();
    subtract9HoursByObject(imcompletedPayments);

    // 가상계좌 입금 시간 만료인 경우 취소 처리
    const notPaiedPayments =
      await getVirtualNotPaiedPayments(imcompletedPayments);
    await cancelByPayments(notPaiedPayments);

    // 가상계좌 만료 취소 처리된 리스트는 제외
    imcompletedPayments = imcompletedPayments.filter(
      (payment) => !notPaiedPayments.some((p) => p.id === payment.id),
    );

    // 접수 후 {afterDays}일 지나면 완료 처리(일반적으로 7일)
    const filteredPayments = imcompletedPayments.filter((payment) => {
      const reqDate = dayjs(payment.requestedAt);
      const nowDate = dayjs();

      const days = nowDate.diff(reqDate, "day");
      return days >= afterDays;
    });

    await updateCompleteByPayments(filteredPayments);

    // 완료처리 안된 것은 배송 추적하여 완료 처리
    const updatedIds = filteredPayments.map((p) => p.id);
    const notUpdatedPayments = imcompletedPayments.filter(
      (payment) => !updatedIds.includes(payment.id),
    );

    // product 정보를 payments에 추가(delivery 정보를 가져오기 위함)
    await addProductOfPayments(notUpdatedPayments);

    // 배송정보가 있는 배열을 가져온다.
    const deliveredPayments = await getDeliveredPayments(notUpdatedPayments);
    await updateCompleteByPayments(deliveredPayments);

    return NextResponse.json({ code: "success" });
  } catch (err: any) {
    return NextResponse.json({ code: "error", errorMessage: err.message });
  }
}

async function getDeliveredPayments(payments: Payment[]) {
  let deliveredPayments: Payment[] = [];
  for (const payment of payments) {
    if (!payment.paymentItems) continue;

    const isDelivered = await isAnyPaymentDelivered(payment.paymentItems);

    if (isDelivered) {
      deliveredPayments.push(payment);
    }
  }
  return deliveredPayments;
}

async function isAnyPaymentDelivered(paymentItems: PaymentItem[]) {
  for (const pi of paymentItems) {
    const trackings = bigoToTrackings(pi.pd?.bigo);
    if (!trackings) continue;

    for (const tracking of trackings) {
      const trackingResult = await fetchTracking({
        carrierId: tracking.carrierId,
        trackingNumber: tracking.trackingNumber!,
      });
      if (trackingResult.state?.id === "delivered") {
        return true;
      }
    }
  }
  return false;
}

async function getVirtualNotPaiedPayments(payments: Payment[]) {
  const notPaiedPayments = payments.filter(
    (payment) =>
      payment.virtual &&
      payment.sendType === "결제대기" &&
      dayjs(payment.virtual!.dueDate) < dayjs(),
  );

  // TOSS API로 재검증 작업
  const waitingPayments: Payment[] = [];
  for (const payment of notPaiedPayments) {
    const data = await resultWrapper2(
      getPaymentOrders({
        appEnv: payment.test ? "dev" : "prod",
        orderId: payment.orderId,
      }),
    );

    // 대기 상태인 경우
    if (data.result && data.result.status === "WAITING_FOR_DEPOSIT") {
      waitingPayments.push(payment);
    }
  }

  return waitingPayments;
}
