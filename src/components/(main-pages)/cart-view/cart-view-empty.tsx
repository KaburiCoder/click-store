import React from "react";
import Image from "next/image";
import { imgPaths } from "@/paths";

export default function CartViewEmpty() {
  return (
    <div className="flex h-[calc(100vh-var(--header-height))] items-center justify-center">
      <div className="relative flex max-h-[30rem] max-w-[30rem] items-center justify-center overflow-hidden">
        <Image
          className="z-[-1] h-full w-full min-w-[20rem] max-w-[50rem]"
          src={imgPaths.emptyCart}
          width={500}
          height={500}
          alt="카트이미지"
        />
        <div className="flex-center absolute rounded bg-red-500 bg-opacity-90 px-4 py-2">
          <label className="text-2xl font-bold text-white">
            장바구니가 비었어요!
          </label>
        </div>
      </div>
    </div>
  );
}
