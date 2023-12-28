"use client";

import { findWebBunryuList } from "../services/product-list-web-bunryu.service";

export function fetchWebBunryuList() {
  return findWebBunryuList();
}
