"use client";
import ButtonL from "@/components/ui/custom/button-l";
import { InputL } from "@/components/ui/custom/input-l";
import { findPasswordAction } from "@/db/actions/find-password-action";
import { paths } from "@/paths";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

export default function FindPasswordForm() {
  const [state, action] = useFormState(findPasswordAction, {});
  const { sendedEmail, errorMessage } = state;

  return (
    <>
      {sendedEmail ? (
        <div className="flex flex-col gap-2 py-6 px-4 shadow">
          <div className="p-2 text-center font-bold text-blue-500">
            {sendedEmail}
          </div>
          <div className="text-sm">메일로 비밀번호 변경 URL을 전송했어요!</div>
        </div>
      ) : (
        <form className="flex flex-col gap-1" action={action}>
          <InputL
            autoFocus
            label="아이디"
            name="userId"
            placeholder="가입 시 입력했던 아이디"
            errorMessage={errorMessage}
          />
          <ButtonL className="mt-1">찾기</ButtonL>
        </form>
      )}
    </>
  );
}
