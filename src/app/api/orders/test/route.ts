import { getJoinedPayments } from "@/db/services/payment.service";
import { getPaymentOrders } from "@/db/services/toss-payments/get-payment-orders";
import { subtract9HoursByObject } from "@/lib/utils/date.util";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function PATCH() {
  const payments = await getJoinedPayments();
  subtract9HoursByObject(payments);

  const notPaiedPayments = payments.filter(
    (payment) => payment.virtual && dayjs(payment.virtual!.dueDate) > dayjs(),
  );

  for (const payment of notPaiedPayments) {
    const result = await getPaymentOrders({
      appEnv: payment.test ? "dev" : "prod",
      orderId: payment.orderId,
    });
    result.status == "WAITING_FOR_DEPOSIT";
    console.log(result.status);

    // console.log(
    //   `${payment.orderId} - ${dayjs(payment.virtual?.dueDate).format(
    //     "YYYY-MM-DD HH:mm",
    //   )} //// now - ${dayjs().format("YYYY-MM-DD HH:mm")}`,
    // );
  }
  return NextResponse.json({});
}
