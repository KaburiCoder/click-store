import { paths } from "@/paths";
import Link from "next/link";
import React from "react";

export default function UnauthenticatedChangePassword() {
  return (
    <>
      <div className="font-bold text-red-500">
        비밀번호 변경 권한이 없습니다.
      </div>
      <Link
        href={paths.login()}
        className="mt-4 w-full rounded bg-rose-500 p-3 text-center text-white"
      >
        확인
      </Link>
    </>
  );
}
