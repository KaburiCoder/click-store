import { TrackingProgress } from "@/db/interfaces/delivery-tracking";
import { cn } from "@/lib/utils/shadcn.util";
import dayjs from "dayjs";
import React from "react";
import { GiPresent } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

interface Props {
  progress: TrackingProgress;
  highlight: boolean;
}

export default function TrackingItem({ progress, highlight }: Props) {
  const time = dayjs(progress.time).format("YYYY-MM-DD HH:mm:ss");
  const Icon = progress.status.id === "delivered" ? GiPresent : TbTruckDelivery;

  return (
    <li className={"my-5 flex items-center"}>
      <Icon
        className={cn(
          "mr-4 h-10 w-10 rounded-full bg-gray-300 p-1.5 text-gray-50",
          highlight && "bg-blue-600",
        )}
      />
      <div className={cn("flex-1 text-gray-500", highlight && "text-black")}>
        <div className="text-sm">{time}</div>
        <div>{progress.location.name}</div>
        <div>{progress.description}</div>
      </div>
    </li>
  );
}
