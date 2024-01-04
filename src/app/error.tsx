"use client";
import ErrorCard from "@/components/error-card";
import MainLogo from "@/components/main-logo";
import ButtonL from "@/components/ui/custom/button-l";
import { ErrorProps } from "@/lib/props/error.props";
import { paths } from "@/paths";
import Link from "next/link";
import React from "react";

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex-center h-full flex-col bg-rose-50">
      <div className="flex flex-col justify-start">
        <MainLogo />
        <ErrorCard
          title="알 수 없는 에러가 발생했습니다."
          body={error.message}
        />
        <div className="m-auto flex justify-around gap-2">
          <Link href={paths.root()}>
            <ButtonL onClick={reset}>메인으로</ButtonL>
          </Link>
          <ButtonL variant={"green"} onClick={reset}>
            재시도
          </ButtonL>
        </div>
      </div>
    </div>
  );
}
