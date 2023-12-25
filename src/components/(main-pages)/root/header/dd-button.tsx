"use client";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import styles from "./dd-button.module.scss";
import AccIconButton from "@/components/(account-pages)/acc-icon-button/acc-icon-button";
import { IconType } from "react-icons";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";

interface Props {
  text?: string;
  icon: IconType;
  popupLocation?: "left" | "right";
  modalComponent?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

const DdButton = React.forwardRef(
  (
    { text, icon, popupLocation, modalComponent, children, onClick }: Props,
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [isEnter, setIsEnter] = useState(false);
    const { matches: min768 } = useMinMediaQuery(768);

    useImperativeHandle(ref, () => {
      return { setOpen };
    });

    function handleClick() {
      setOpen(true);
      onClick?.();
    }

    useEffect(() => {
      if (!open) setIsEnter(false);
    }, [open]);

    useEffect(() => {
      if (min768) setOpen(isEnter);
    }, [min768, isEnter]);

    return (
      <AccIconButton
        text={text}
        onMouseEnter={() => setIsEnter(true)}
        onMouseLeave={() => setIsEnter(false)}
        icon={icon}
        open={open}
        setOpen={setOpen}
        popupLocation={popupLocation}
        modalComponent={modalComponent}
        onClick={handleClick}
      >
        {children}
      </AccIconButton>
    );
  }
);

DdButton.displayName = "DdButton";

export default DdButton;
