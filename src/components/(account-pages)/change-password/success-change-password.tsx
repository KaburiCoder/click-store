import { paths } from "@/paths";
import Link from "next/link";
import React from "react";

export default function SuccessChangePassword() {
  return (
    <>
      <div className="font-bold text-blue-500">
        성공적으로 비밀번호가 변경되었습니다.
      </div>
      <Link
        href={paths.login()}
        className="mt-4 w-full rounded bg-blue-500 p-3 text-center text-white"
      >
        확인
      </Link>
    </>
  );
}
