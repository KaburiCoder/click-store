"use client";

import { getCsByUserId } from "../services/cs.service";

export async function fetchGetCsByUserId(userId: string) {
  return await getCsByUserId(userId);
}
