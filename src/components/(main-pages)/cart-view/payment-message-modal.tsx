import Modal from "@/components/(shared)/modal";
import QuillHtmlReader from "@/components/(shared)/quill-html-wrapper";
import ButtonL from "@/components/ui/custom/button-l";
import { ModalProps } from "@/lib/props/modal.props";
import React from "react";

interface Props extends ModalProps {
  pgMessageHtml: string | undefined;
  onContinue: () => void;
}
export default function PaymentMessageModal({
  open,
  pgMessageHtml,
  setOpen,
  onContinue,
}: Props) {
  if (!pgMessageHtml) return <></>;

  return (
    <Modal
      className="flex min-w-[20rem] flex-col gap-4"
      open={open}
      setOpen={setOpen}
    >
      <QuillHtmlReader html={pgMessageHtml} />
      <ButtonL onClick={onContinue}>계속 진행하기</ButtonL>
    </Modal>
  );
}
