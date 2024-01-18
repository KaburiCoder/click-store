"use client";

import { getPgMessage } from "../services/pg-msg.service";

export async function fetchPgMessage() {
  return getPgMessage();
}
