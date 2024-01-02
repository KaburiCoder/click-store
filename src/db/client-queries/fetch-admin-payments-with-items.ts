"use client";
import { getAdminPaymentsWithItems } from "../services/payment.service";
import { AdminInfinitySearchDto } from "../dto/payment/admin-infinity-search.dto";

export async function fetchGetAdminPaymentsWithItems(
  dto: AdminInfinitySearchDto,
) {
  return await getAdminPaymentsWithItems(dto);
}
