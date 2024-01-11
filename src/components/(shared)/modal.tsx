"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import Backdrop from "./backdrop";
import { ModalProps } from "@/lib/props/modal.props";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends ModalProps {
  className?: string;
}

export default function Modal({ open, setOpen, children, className }: Props) {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current && e.target !== wrapper.current) {
        onDismiss?.();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  if (!open) return <></>;

  return (
    <Backdrop ref={overlay} setPortal notScrollHidden onClick={onClick}>
      <div
        ref={wrapper}
        className={cn(
          "cst-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4",
          "animate-modal-slide-down",
        )}
      >
        {children}
      </div>
    </Backdrop>
  );
}
