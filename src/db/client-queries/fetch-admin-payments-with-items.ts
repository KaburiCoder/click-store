"use client";
import { AdminSearchBarData } from "@/store/admin-search-bar.store";
import { getAdminPaymentsWithItems } from "../services/payment.service";

export async function fetchGetAdminPaymentsWithItems({
  page,
  adminSearch,
}: {
  page: number;
  adminSearch: AdminSearchBarData;
}) {
  return await getAdminPaymentsWithItems({ page, adminSearch });
}
