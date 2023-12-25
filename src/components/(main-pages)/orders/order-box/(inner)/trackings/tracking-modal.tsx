import Modal from "@/components/(shared)/modal/modal";
import { fetchTracking } from "@/db/client-queries/fetch-tracking";
import { QKey } from "@/db/keys";
import { Tracking } from "@/lib/classes/tracking";
import { ModalProps } from "@/lib/props/modal.props";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TrackingMain from "./tracking-main";
import TrackingError from "./tracking-error";
import TrackingLoading from "./tracking-loading";

interface Props extends ModalProps {
  tracking: Tracking;
}

export default function TrackingModal(props: Props) {
  const { open, setOpen, tracking } = props;
  const { data, error, isFetching } = useTracking(props);

  let component: React.ReactNode;
  if (isFetching) {
    component = <TrackingLoading />;
  } else if (error || data?.message) {
    const message = error ? error.message : data.message;
    component = <TrackingError errorMessage={message!} />;
  } else {
    component = (
      <TrackingMain
        trackingNumber={tracking.trackingNumber!}
        trackingResult={data!}
      />
    );
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      {component}
    </Modal>
  );
}

const useTracking = ({ open, tracking }: Props) => {
  const query = useQuery({
    queryKey: [QKey.fetchTracking, tracking, open],
    queryFn: () => fetchTracking(tracking),
    select: (data) => {
      data?.progresses?.sort((a, b) => {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      });
      return data;
    },
    gcTime: 60000,
    enabled: open,
  });

  return query;
};
