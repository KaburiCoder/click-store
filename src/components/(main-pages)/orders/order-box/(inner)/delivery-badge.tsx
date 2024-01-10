"use client";
import { Badge } from "@/components/ui/badge";
import { TrackingProps } from "@/lib/props/tracking.props";
import React, { useState } from "react";
import TrackingModal from "./trackings/tracking-modal";

export default function DeliveryBadge({ tracking }: TrackingProps) {
  const [open, setOpen] = useState(false);
  const text = `${tracking.name} ${tracking.trackingNumber}`;

  function handleOpenTracking() {
    setOpen(true);
  }

  return (
    <>
      {open && (
        <TrackingModal open={open} setOpen={setOpen} tracking={tracking} />
      )}
      <Badge
        variant={"tracking"}
        className="hover:cursor-pointer"
        key={text}
        onClick={handleOpenTracking}
      >
        {text}
      </Badge>
    </>
  );
}
