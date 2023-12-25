"use client";
import { getAccountByUserId } from "../services/account.service";

export async function fetchCheckUserId(userId: string) {
  const result = await getAccountByUserId(userId);
  return !!result;
}
