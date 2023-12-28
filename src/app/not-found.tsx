"use client";
import ButtonL from "@/components/ui/custom/button-l";
import { imgPaths, paths } from "@/paths";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const { push, back } = useRouter();

  console.log(
    "process.env.NEXT_PBULIC_NODE_ENV",
    process.env.NEXT_PBULIC_NODE_ENV,
  );

  function handleToMain(): void {
    push(paths.root());
  }

  return (
    <div className="flex h-full items-center justify-center bg-slate-100">
      <div className="p-4">
        <div>
          <Image
            src={imgPaths.logo}
            alt="클릭스토어 로고"
            width={120}
            height={120}
          />
          <div className="my-4 flex flex-col overflow-hidden rounded-lg border-[1px] border-solid border-rose-300 bg-white shadow">
            <h2 className="bg-rose-50 p-4 text-rose-500">
              찾을 수 없는 페이지 입니다.
            </h2>
            <div className="text-md p-4">
              입력하신 페이지의 주소가 잘못 입력되었거나,
              <br />
              변경 또는 삭제되어 요청하신 페이지를 찾을 수 없습니다.
            </div>
          </div>
          <div className="flex justify-center gap-2 px-6">
            <ButtonL className="w-full" variant={"destructive"} onClick={back}>
              뒤로가기
            </ButtonL>
            <ButtonL className="w-full" onClick={handleToMain}>
              메인으로
            </ButtonL>
          </div>
        </div>
      </div>
    </div>
  );
}
