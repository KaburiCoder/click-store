"use client";

import React, { useEffect } from "react";
import styles from "./Backdrop.module.scss";
import ReactDOM from "react-dom";

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
      className={`${styles.backdrop} ${props.className}`}
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
