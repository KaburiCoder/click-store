"use client";
import { Tracking } from "@/lib/classes/tracking";
import { useDeliveryTracking } from "@/lib/hooks/useDeliveryTracking";

interface Props {
  searchParams: {
    name: string;
    number: string;
  };
}
export default function DeliveryPage({
  searchParams: { name, number },
}: Props) {
  const tracking = new Tracking(name, number);
  const { component } = useDeliveryTracking({
    open: true,
    tracking,
  });
  return (
    <div className="flex h-full flex-col items-center bg-slate-100">
      {component}
    </div>
  );
}
