import { Prisma } from "@prisma/client";
import { PaymentItem } from "./payment-item";
import { PaymentVirtual } from "./payment-virtual";
import { Cs } from "./cs";

export interface Payment extends Prisma.PaymentCreateManyInput {
  sendType:
  | string
  | "결제대기"
  | "주문확인"
  | "상품준비중"
  | "배송중"
  | "배송완료";
  paymentItems?: PaymentItem[];
  virtual?: PaymentVirtual;
  cs?: Cs;
}
