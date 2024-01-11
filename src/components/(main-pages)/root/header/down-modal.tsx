"use client";

import Backdrop from "@/components/(shared)/backdrop";
import { ScriptProps } from "next/script";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";
import { cn } from "@/lib/utils/shadcn.util";

interface Props extends ScriptProps {
  setPortal?: boolean;
  popupLocation?: "left" | "right";
  onClose: () => void;
}

const DownModal: React.FC<Props> = ({
  className,
  children,
  popupLocation,
  setPortal,
  onClose,
}) => {
  const { matches: min768 } = useMinMediaQuery(768);

  function backdropMouseEnterHandler(): void {
    if (!min768) return;
    onClose();
  }

  return (
    <>
      <Backdrop
        onClick={onClose}
        setPortal={setPortal}
        onMouseEnter={backdropMouseEnterHandler}
        notScrollHidden
      />
      {/* style={style} */}
      <div
        className={cn(
          "fixed right-0 z-[10000] w-fit min-w-[22rem] overflow-hidden rounded-b bg-slate-100 shadow",
          "animate-slide-down",
          popupLocation === "left" ? "left-0" : "",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default DownModal;
