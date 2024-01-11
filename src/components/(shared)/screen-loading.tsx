import React from "react";
import Backdrop from "./backdrop";
import Image from "next/image";

export default function ScreenLoading() {
  return (
    <>
      <Backdrop
        className="!bg-white !bg-opacity-5"
        notScrollHidden
        zIndex={9999}
      />
      <Image
        className="fixed left-1/2 top-1/2 z-[99999] -translate-x-1/2 -translate-y-1/2"
        width={100}
        height={100}
        src={"/gifs/loading.gif"}
        alt="loading..."
      />
    </>
  );
}
