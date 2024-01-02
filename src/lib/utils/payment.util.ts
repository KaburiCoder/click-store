import { Payment } from "@/db/models/payment";
import dayjs from "dayjs";

export function updateOrderCancel(
  setPayments: (value: React.SetStateAction<Payment[]>) => void,
  p: Payment,
) {
  setPayments((prevPayments: Payment[]) => updateCancel(prevPayments, p));
}

export function updateCancel(prevPayments: Payment[], payment: Payment) {
  return prevPayments.map((prevPayment) => {
    if (prevPayment === payment) {
      return { ...prevPayment, cancel: true };
    }
    return prevPayment;
  });
}

export function getSendType(
  payment: Payment,
): "결제대기" | "주문확인" | "상품준비중" | "배송중" | "배송완료" | "주문취소" {
  if (payment.cancel) {
    return "주문취소";
  }

  const convertedSendType = convTypeByProduct(payment);
  switch (convertedSendType) {
    case "배송중":
    case "상품준비중":
      const completeType = convToComplete(payment);
      if (completeType) {
        return completeType;
      }
      return convertedSendType;
  }

  return payment.sendType as any;
}

function convToComplete(payment: Payment) {
  const approvedDate =
    payment.method === "후불결제" ? payment.requestedAt : payment.approvedAt;
  if (approvedDate && dayjs() >= dayjs(approvedDate).add(7, "d")) {
    return "배송완료";
  }
}

function convTypeByProduct(payment: Payment) {
  if (["결제대기", "주문확인"].includes(payment.sendType)) {
    const items = payment.paymentItems;
    const isWaybill = items?.some(
      (pi) => pi.pd?.orderCheck === "0" && pi.pd?.bigo?.trim() !== "",
    );
    if (isWaybill) {
      return "배송중";
    }

    const isOrdered = items?.some((pi) => pi.pd?.etc1?.startsWith("1"));
    if (isOrdered) {
      return "상품준비중";
    }
  }
}
