"use client";
import {
  PaymentOrdersArgs,
  getPaymentOrders,
} from "../services/toss-payments/get-payment-orders";

export async function fetchTossPaymentOrders(args: PaymentOrdersArgs) {
  return await getPaymentOrders(args);
}
