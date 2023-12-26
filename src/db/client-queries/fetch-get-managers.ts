"use client";

import { getManagers } from "../services/em.service";

export default async function fetchGetManagers() {
  return await getManagers();
}
