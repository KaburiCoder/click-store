"use client";
import { TrackingResult } from "@/db/interfaces/delivery-tracking";
import { deliveryData } from "../datas/delivery-data";
import { Tracking } from "../classes/tracking";

const BASE_URL = "https://apis.tracker.delivery/carriers";

const useDeliveryTracking = () => {
  const fetchTracking = async ({
    name,
    trackingNumber,
  }: Tracking): Promise<TrackingResult> => {
    const carrierId = deliveryData[name];

    if (!carrierId) {
      return { message: "배송사 코드 오류" };
    }

    const url = `${BASE_URL}/${carrierId}/tracks/${trackingNumber}`;

    const response = await fetch(url);

    return response.json();
  };

  return {
    fetchTracking,
  };
};

export default useDeliveryTracking;
