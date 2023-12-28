"use client";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import MainMenu from "../main-menu/main-menu";
import DownModal from "./down-modal";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModal = ({ open, setOpen }: Props) => {
  if (!open) {
    return <></>;
  }

  return (
    <DownModal popupLocation="left" onClose={() => setOpen(false)}>
      <MainMenu />
    </DownModal>
  );
};

export default MenuModal;
