"use client";
import { useQuery } from "@tanstack/react-query";
import { Tracking } from "../classes/tracking";
import { ModalProps } from "../props/modal.props";
import { QKey } from "@/db/keys";
import { fetchTracking } from "@/db/client-queries/fetch-tracking";
import TrackingLoading from "@/components/(main-pages)/orders/order-box/(inner)/trackings/tracking-loading";
import TrackingError from "@/components/(main-pages)/orders/order-box/(inner)/trackings/tracking-error";
import TrackingMain from "@/components/(main-pages)/orders/order-box/(inner)/trackings/tracking-main";

interface Props extends Partial<ModalProps> {
  tracking: Tracking;
}

export const useDeliveryTracking = ({
  open,
  setOpen,
  tracking,
}: Partial<Props>) => {
  const { data, error, isFetching } = useQuery({
    queryKey: [QKey.fetchTracking, tracking, open],
    queryFn: () => fetchTracking(tracking!),
    select: (data) => {
      data?.progresses?.sort((a, b) => {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      });
      return data;
    },
    gcTime: 60000,
    enabled: open,
  });

  let component: React.ReactNode;
  if (isFetching) {
    component = <TrackingLoading />;
  } else if (error || data?.message) {
    const message = error ? error.message : data.message;
    component = <TrackingError errorMessage={message!} />;
  } else {
    component = (
      <TrackingMain
        trackingNumber={tracking!.trackingNumber!}
        trackingResult={data!}
        open={open}
        setOpen={setOpen}
      />
    );
  }

  return { component };
};
