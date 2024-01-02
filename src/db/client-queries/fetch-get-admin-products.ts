"use client";
import { getAdminProducts } from "../services/product.service";
import { AdminInfinitySearchDto } from "../dto/payment/admin-infinity-search.dto";

export async function fetchGetAdminProducts(dto: AdminInfinitySearchDto) {
  return await getAdminProducts(dto);
}
