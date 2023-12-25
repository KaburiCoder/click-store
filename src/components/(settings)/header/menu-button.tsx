"use client";
import Drawer from "@/components/(shared)/drawer/drawer";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import SettingsSide from "../side/side";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";

export default function MenuButton() {
  const [open, setOpen] = useState(false);
  const { matches: min768 } = useMinMediaQuery(768);

  useEffect(() => {
    if (min768) setOpen(false);
  }, [min768]);

  function handleMenuClick() {
    setOpen(true);
  }

  return (
    <>
      <Drawer open={open} setOpen={setOpen} anchor="left">
        <SettingsSide />
      </Drawer>
      <Button
        variant={"ghost"}
        className="w-fit md:hidden"
        onClick={handleMenuClick}
      >
        <CiMenuKebab className="h-5 w-5" />
      </Button>
    </>
  );
}
