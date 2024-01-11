"use client";

import React, { useEffect } from "react";
import styles from "./Backdrop.module.scss";
import ReactDOM from "react-dom";
import { cn } from "@/lib/utils/shadcn.util";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseEnter?: () => void;
  zIndex?: number;
  setPortal?: boolean;
  notScrollHidden?: boolean;
  className?: string;
  children?: React.ReactNode;
}
const Backdrop = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  useEffect(() => {
    if (!props.notScrollHidden) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (!props.notScrollHidden) {
        document.body.style.overflow = "auto";
      }
    };
  }, [props.notScrollHidden]);

  const elem = (
    <div
      ref={ref}
      style={{ zIndex: props.zIndex }}
      className={cn(
        "animate-backdrop bg-black fixed left-0 top-0 z-[1001] h-screen w-screen",
        props.className,
      )}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
    >
      {props.children}
    </div>
  );

  if (props.setPortal) {
    const data = document.getElementById("backdrop-root") as HTMLElement;

    return ReactDOM.createPortal(elem, data);
  } else {
    return elem;
  }
});

Backdrop.displayName = "Backdrop";
export default Backdrop;
