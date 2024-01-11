import { ScriptProps } from "next/script";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { IconType } from "react-icons";
import DownModal from "@/components/(main-pages)/root/header/down-modal";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends ScriptProps {
  icon: IconType;
  text?: string;
  onClick?: MouseEventHandler;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  popupLocation?: "left" | "right";
  modalComponent?: React.ReactNode;
}

export default function AccIconButton({
  icon: Icon,
  text,
  onClick,
  onMouseEnter,
  onMouseLeave,
  modalComponent,
  open,
  setOpen,
  popupLocation,
  children,
}: Props) {
  const [mouseEntered, setMouseEntered] = useState(false);
  function handleMouseEnter(): void {
    setMouseEntered(true);
    onMouseEnter?.();
  }

  function handleMouseLeave(): void {
    setMouseEntered(false);
    onMouseLeave?.();
  }

  function handleDownModalClose() {
    handleMouseLeave();
    setOpen?.(false);
  }
  useEffect(() => {
    return () => {
      setMouseEntered(false);
    };
  }, []);

  return (
    <div
      className="h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("relative h-full", mouseEntered ? "md:z-[1002]" : "")}>
        <div className="relative flex h-full items-center bg-white">
          <button
            className="my-1 flex items-center justify-between bg-transparent px-2 text-blue-900 hover:text-blue-600"
            onClick={onClick}
          >
            <Icon className="h-full w-7 flex-1" />
            {children}
            {text && <span className="hidden pl-0.5 md:block">{text}</span>}
          </button>
        </div>
      </div>
      {modalComponent && open && (
        <DownModal popupLocation={popupLocation} onClose={handleDownModalClose}>
          {modalComponent}
        </DownModal>
      )}
    </div>
  );
}
