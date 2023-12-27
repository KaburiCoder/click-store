"use client";
import { AdminSearchBarData } from "@/store/admin-search-bar.store";
import { getAdminProducts } from "../services/product.service";

export async function fetchGetAdminProducts(
  page: number,
  searchData: AdminSearchBarData,
) {
  return await getAdminProducts(page, searchData);
}
