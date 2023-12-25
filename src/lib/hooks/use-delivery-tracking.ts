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

  const convertBigoToTrackings = (bigo?: string) => {
    if (!bigo) return;
    const bigoArr = bigo.split(/,|\//).map((b) => b.trim());

    const trackings: Tracking[] = [];

    bigoArr.forEach((b) => {
      const [name, number] = b.split(" ");

      if (name && number) {
        trackings.push(new Tracking(name.toLowerCase(), number));
      } else if (!number && name) {
        if (trackings.length === 0) return;
        const number = name;
        const prevName = trackings[trackings.length - 1].name;

        trackings.push(new Tracking(prevName, number));
      }
    });

    return trackings;
  };

  return {
    fetchTracking,
    convertBigoToTrackings,
  };
};

export default useDeliveryTracking;
