"use client";
import ErrorCard from "@/components/error-card";
import MainLogo from "@/components/main-logo";
import ButtonL from "@/components/ui/custom/button-l";
import { imgPaths, paths } from "@/paths";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const { push, back } = useRouter();

  function handleToMain(): void {
    push(paths.root());
  }

  return (
    <div className="flex h-full items-center justify-center bg-slate-100">
      <div className="p-4">
        <div>
          <MainLogo />
          <ErrorCard
            title="찾을 수 없는 페이지 입니다."
            body={
              <>
                입력하신 페이지의 주소가 잘못 입력되었거나,
                <br />
                변경 또는 삭제되어 요청하신 페이지를 찾을 수 없습니다.
              </>
            }
          />
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
