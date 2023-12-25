"use client";
import { getPaymentsWithItems } from "../services/payment.service";

export async function fetchGetPaymentsWithItems({ page }: { page: number }) {
  return await getPaymentsWithItems({ page });
}
