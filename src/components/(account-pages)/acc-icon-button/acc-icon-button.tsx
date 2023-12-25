import classNames from "classnames";
import { ScriptProps } from "next/script";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { IconType } from "react-icons";
import styles from "./acc-icon-button.module.scss";
import DownModal from "@/components/(main-pages)/root/header/down-modal";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";

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
  const { matches: min768 } = useMinMediaQuery(768);
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

  // const { isMobile } = useResizeWindow();

  // const isModalShown = useModalStore(
  //   (state) => state.showCartModal || state.showMenuModal || state.showUserModal
  // );

  // useEffect(() => {
  //   if (!isModalShown) {
  //     setMouseEntered(false);
  //   }
  // }, [isModalShown]);

  return (
    <div
      className={styles.all_wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames(
          styles.wrapper,
          mouseEntered && min768 ? styles.button_to_front : ""
        )}
      >
        <div className={styles.button_container}>
          <button className={styles.button} onClick={onClick}>
            <Icon className={styles.icon} />
            {children}
            {min768 && text && <span className={styles.text}>{text}</span>}
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
