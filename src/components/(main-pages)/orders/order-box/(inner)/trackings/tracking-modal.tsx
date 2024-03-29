import Modal from "@/components/(shared)/modal";
import { Tracking } from "@/lib/classes/tracking";
import { ModalProps } from "@/lib/props/modal.props";
import React from "react";
import { useDeliveryTracking } from "@/lib/hooks/useDeliveryTracking";

interface Props extends ModalProps {
  tracking: Tracking;
}

export default function TrackingModal(props: Props) {
  const { open, setOpen } = props;
  const { component } = useDeliveryTracking(props);

  return (
    <Modal className="max-w-[30rem]" open={open} setOpen={setOpen}>
      {component}
    </Modal>
  );
}
