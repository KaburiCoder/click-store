"use client";
import { TrackingResult } from "@/db/interfaces/delivery-tracking";
import dayjs from "dayjs";
import React from "react";
import TrackingItem from "./tracking-item";
import { cn } from "@/lib/utils/shadcn.util";

interface Props {
  trackingNumber: string;
  trackingResult: TrackingResult;
}

const titleStyle = "my-4 text-left text-sm text-gray-500";

export default function TrackingMain({
  trackingNumber,
  trackingResult,
}: Props) {
  return (
    <div className="flex max-h-[90vh] min-h-[20rem] flex-col">
      <Title trackingNumber={trackingNumber} trackingResult={trackingResult} />
      <Body trackingNumber={trackingNumber} trackingResult={trackingResult} />
    </div>
  );
}

const trStyle = "h-8";
const thStyle = "w-24 text-left text-gray-500";

function Title({ trackingNumber, trackingResult }: Props) {
  const fromDteString = dayjs(trackingResult?.from?.time).format(
    "YYYY-MM-DD HH:mm",
  );
  return (
    <section className="bg-white p-5 pb-0">
      <h2 className="text-3xl">Delivery Tracking</h2>
      <div className={titleStyle}>등록일 : {fromDteString}</div>
      <table className="min-w-[20rem] text-base">
        <tbody>
          <tr className={trStyle}>
            <th className={thStyle}>운송장번호</th>
            <td>{`${trackingResult?.carrier?.name} / ${trackingNumber}`}</td>
          </tr>
          <tr className={trStyle}>
            <th className={thStyle}>상태</th>
            <td>{trackingResult?.state?.text}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

function Body({ trackingNumber, trackingResult }: Props) {
  const trackingItems = trackingResult?.progresses?.map((p, i) => (
    <TrackingItem key={i} progress={p} highlight={i === 0} />
  ));

  return (
    <>
      <div className={cn('m-5', titleStyle)}>배송정보</div>
      <div className="overflow-y-auto m-5 mt-0">
        {trackingItems && <ul>{trackingItems}</ul>}
      </div>
    </>
  );
}
