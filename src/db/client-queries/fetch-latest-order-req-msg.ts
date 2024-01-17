"use client";
import { getOrderReqMsgs } from "../services/order-req-msg.service";

export async function fetchOrderReqMsgs() {
  return getOrderReqMsgs({ orderBy: "desc" });
}
