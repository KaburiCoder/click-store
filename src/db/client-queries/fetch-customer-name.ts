"use client";

import { GetCustomerNameDto } from "../dto/payment/get-customer-name.dto";
import { getCustomerName } from "../services/payment.service";

export async function fetchCustomerName(dto: GetCustomerNameDto) {
  return await getCustomerName(dto);
}
