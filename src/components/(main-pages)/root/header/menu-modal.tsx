"use client";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import MainMenu from "../main-menu/main-menu";
import DownModal from "./down-modal";

interface Props extends BunryuObjectProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal = ({ open, setOpen, bunryuObjects }: Props) => {
  if (!open) {
    return <></>;
  }

  return (
    <DownModal popupLocation="left" onClose={() => setOpen(false)}>
      <MainMenu bunryuObjects={bunryuObjects} />
    </DownModal>
  );
};

export default MenuModal;
