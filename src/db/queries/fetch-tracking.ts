"use server";
import { TrackingResult } from "../interfaces/delivery-tracking";
import { paths } from "@/paths";

export async function fetchTracking({
  carrierId,
  trackingNumber,
}: {
  carrierId: string;
  trackingNumber: string;
}): Promise<TrackingResult> {
  const response = await fetch(paths.tracking(carrierId, trackingNumber), {
    cache: "no-cache",
  });

  const result = await response.json();
  return result;
}
