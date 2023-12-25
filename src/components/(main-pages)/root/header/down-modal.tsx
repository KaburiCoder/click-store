"use client";

import styles from "./down-modal.module.scss";
import Backdrop from "@/components/(shared)/backdrop/backdrop";
import { ScriptProps } from "next/script";
import classNames from "classnames";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";

interface Props extends ScriptProps {
  setPortal?: boolean;
  popupLocation?: "left" | "right";
  onClose: () => void;
}

const DownModal: React.FC<Props> = ({
  children,
  popupLocation,
  setPortal,
  onClose,
}) => {
  const { matches: min768 } = useMinMediaQuery(768);

  // const { isMobile } = useResizeWindow();
  // const { clear } = useModalStore();

  // function backdropClickHandler() {
  //   clear();
  // }
  // const style: CSSProperties =
  //   props.popupLocation === "left" ? { left: 0 } : {};

  function backdropMouseEnterHandler(): void {
    if (!min768) return;
    onClose();
  }

  const modalStyles = classNames(
    "cst-card",
    styles.slider,
    popupLocation === "left" ? styles.popup_left : undefined
  );

  return (
    <>
      <Backdrop
        onClick={onClose}
        setPortal={setPortal}
        onMouseEnter={backdropMouseEnterHandler}
        notScrollHidden
      />
      {/* style={style} */}
      <div className={modalStyles}>{children}</div>
    </>
  );
};

export default DownModal;
