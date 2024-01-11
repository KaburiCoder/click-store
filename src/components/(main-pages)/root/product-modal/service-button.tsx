"use client";
import Drawer from "@/components/(shared)/drawer/drawer";
import React, { useState } from "react";
import ServiceInfo from "./service-info";
import { cn } from "@/lib/utils/shadcn.util";

export default function ServiceButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "text-center text-xs text-blue-900 underline",
          "hover:cursor-pointer",
        )}
        onClick={() => {
          setDrawerOpen(true);
        }}
      >
        서비스 안내
      </div>
      <Drawer
        anchor="bottom"
        overflow="auto"
        zIndex={10000}
        open={drawerOpen}
        setOpen={setDrawerOpen}
      >
        <ServiceInfo />
      </Drawer>
    </>
  );
}
