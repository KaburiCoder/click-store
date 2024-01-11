import React, { useEffect, useState } from "react";
import styles from "./drawer.module.css";
import ReactDOM from "react-dom";
import Backdrop from "../backdrop";
import { ModalProps } from "@/lib/props/modal.props";
import { useCSR } from "@/lib/hooks/use-CSR";
import { cn } from "@/lib/utils/shadcn.util";

interface DrawerProps extends ModalProps {
  anchor?: "left" | "right" | "top" | "bottom";
  zIndex?: number;
  overflow?: "hidden" | "auto" | "scroll";
  className?: string;
}

const Drawer = (props: DrawerProps) => {
  const { open, setOpen } = props;
  const [disp, setDisp] = useState(false);
  const [closeCalled, setCloseCalled] = useState(false);
  const anchor = props.anchor ?? "left";
  const overflow = props.overflow ?? "hidden";
  const { isCSR } = useCSR();
  const animationType =
    anchor === "left" || anchor === "right" ? "width" : "height";

  useEffect(() => {
    setDisp(open);
    setCloseCalled(!open);
  }, [open]);

  function handleBackdropClose() {
    setCloseCalled(true);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  }

  if (!disp || !isCSR) {
    return <></>;
  }

  const rootElement = document.getElementById("drawer-root") as HTMLElement;
  const portal = ReactDOM.createPortal(
    <>
      <Backdrop
        onClick={handleBackdropClose}
        zIndex={props.zIndex}
        setPortal={true}
      />
      <div
        className={cn(
          styles.drawer,
          styles[anchor],
          closeCalled
            ? styles[`close_${animationType}`]
            : styles[`open_${animationType}`],
          props.className,
        )}
        style={{
          zIndex: props.zIndex ? props.zIndex + 1 : undefined,
          overflow,
        }}
      >
        {props.children}
      </div>
    </>,
    rootElement,
  );

  return portal;
};

export default Drawer;
