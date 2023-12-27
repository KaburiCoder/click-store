"use client";
import Drawer from "@/components/(shared)/drawer/drawer";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import SettingsSide from "../(settings)/side/side";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";

interface Props {
  drawerChildren: React.ReactNode;
}

export default function MenuButton({ drawerChildren }: Props) {
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
        {drawerChildren}
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
