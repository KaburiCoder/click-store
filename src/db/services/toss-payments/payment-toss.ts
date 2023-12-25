"use server";

import { PaymentVirtual } from "@/db/models/payment-virtual";
import {
  TOSS_CONFIRM_URL,
  getTossPaymentsHeaders,
} from "@/lib/utils/toss-pg.util";

interface ConfirmTossDto {
  paymentKey: string;
  amount: number;
  orderId: string;
}

interface ConfirmTossResult {
  method?: string;
  code?: string;
  message?: string;
  requestedAt?: string;
  approvedAt?: string;
  orderId?: string;
  paymentKey?: string;
  totalAmount?: string;
  status?: string;
  virtualAccount?: PaymentVirtual;
}

export async function fetchConfirmToss(
  dto: ConfirmTossDto
): Promise<ConfirmTossResult> {
  try {
    const headers = getTossPaymentsHeaders();
    const response = await fetch(TOSS_CONFIRM_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(dto),
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    return {
      message: error.message,
    };
  }
}
