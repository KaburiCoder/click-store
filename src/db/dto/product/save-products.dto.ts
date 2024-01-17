import { Payment } from "@/db/models/payment";
import { PaymentItem } from "@/db/models/payment-item";

export interface SaveProductsDto {
  payment: Partial<Payment>;
  paymentItems: Partial<PaymentItem>[];
  webBNPL: boolean;
  bigo2?: string;
}
