"use client";
import Drawer from "@/components/(shared)/drawer/drawer";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";

interface Props {
  drawerChild: React.FC<DrawerChildProps>;
}

export default function MenuButton({ drawerChild: DrawerChild }: Props) {
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
        <DrawerChild
          onClose={() => {
            setOpen(false);
          }}
        />
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
