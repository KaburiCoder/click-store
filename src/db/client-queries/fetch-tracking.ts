"use client";
import { Tracking } from "@/lib/classes/tracking";
import { TrackingResult } from "../interfaces/delivery-tracking";
import { deliveryData } from "@/lib/datas/delivery-data";

export const fetchTracking = async ({
  name,
  trackingNumber,
}: Tracking): Promise<TrackingResult> => {
  const carrierId = deliveryData[name];

  if (!carrierId) {
    return { message: "배송사 코드 오류" };
  }
  const baseUrl = "https://apis.tracker.delivery/carriers";
  const url = `${baseUrl}/${carrierId}/tracks/${trackingNumber}`;

  const response = await fetch(url);

  return response.json();
};
