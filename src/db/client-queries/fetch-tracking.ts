"use client";
import { Tracking } from "@/lib/classes/tracking";
import { TrackingResult } from "../interfaces/delivery-tracking";
import { fetchTracking as fetchTrackingOnServer } from "../queries/fetch-tracking";
export const fetchTracking = async ({
  carrierId,
  trackingNumber,
}: Tracking): Promise<TrackingResult> => {
  const result = await fetchTrackingOnServer({
    carrierId,
    trackingNumber: trackingNumber!,
  });

  return result;
};
