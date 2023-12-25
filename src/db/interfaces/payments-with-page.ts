import { Payment } from "../models/payment";

export interface PaymentsWithPage {
  page: number;
  isLast: boolean;
  payments: Payment[];
}
