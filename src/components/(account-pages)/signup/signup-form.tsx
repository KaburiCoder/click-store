"use client";
import React, { useEffect, useState } from "react";
import { InputL } from "@/components/ui/custom/input-l";
import IdInput from "./components/id-input";
import { useFormState, useFormStatus } from "react-dom";
import { signupAction } from "@/db/actions/signup.action";
import { stringsToText } from "@/lib/utils/strings.util";
import ButtonL from "@/components/ui/custom/button-l";
import AuthNavi from "../auth-navi";
import { useSearchParams } from "next/navigation";

export default function SignupForm() {
  const params = useSearchParams();
  const [state, action] = useFormState(signupAction, {});
  const errors = state.errors;
  const uid = params.get("uid") as string;

  return (
    <form className="flex flex-col gap-1" action={action}>
      <IdInput
        id="id"
        name="userId"
        uid={uid}
        errorMessage={stringsToText(errors?.userId)}
      />
      <InputL
        id="email"
        name="email"
        label="e-mail"
        type="email"
        errorMessage={stringsToText(errors?.email)}
      />
      <InputL
        id="password"
        name="password"
        label="비밀번호"
        type="password"
        errorMessage={stringsToText(errors?.password)}
      />
      <InputL
        id="confirmPassword"
        name="confirmPassword"
        label="비밀번호 확인"
        type="password"
        errorMessage={stringsToText(errors?.confirmPassword)}
      />
      <ButtonL className="mt-1 w-full">회원가입</ButtonL>
      <AuthNavi links={{ login: true, findPassword: true }} />
    </form>
  );
}
