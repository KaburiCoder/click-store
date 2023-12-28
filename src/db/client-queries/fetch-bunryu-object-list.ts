"use client";

import { getBunryuObjectList } from "../queries/main-page.query";

export async function fetchBunryuObjectList() {
  return await getBunryuObjectList();
}
