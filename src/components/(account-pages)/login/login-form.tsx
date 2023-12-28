"use client";

import React, { useEffect, useRef } from "react";
import LbInput from "../../(shared)/lb-input/lb-input";
import { useFormState } from "react-dom";
import { loginAction } from "@/db/actions/auth";
import ErrorText from "@/components/(shared)/error-text";
import ButtonL from "@/components/ui/custom/button-l";
import AuthNavi from "../auth-navi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getAccountByUserId } from "@/db/services/account.service";
import { paths } from "@/paths";

export default function LoginForm() {
  const params = useSearchParams();
  const { push } = useRouter();
  const uid = params.get("uid") as string;

  // uid가 쿼리스트링으로 들어온 경우 회원가입이 안되어있을 시 회원가입 페이지로
  useEffect(() => {
    if (!uid) return;

    (async () => {
      const account = await getAccountByUserId(uid);

      if (!account) {
        push(paths.signupWithUid(uid));
      }
    })();
  }, [push, uid]);

  const idRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const [errorMessage, formAction] = useFormState(loginAction, undefined);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") {
      const id = idRef.current?.value?.trim();
      const pwd = pwdRef.current?.value;

      if (!id || !pwd) {
        e.preventDefault();
        if (!id) idRef.current?.focus();
        if (!pwd) pwdRef.current?.focus();
      }
    }
  }

  useEffect(() => {
    if (uid && idRef.current) idRef.current.value = uid;
  }, [uid, idRef]);

  return (
    <form action={formAction}>
      <LbInput
        ref={idRef}
        name="id"
        label="요양기관 or 사업자기호"
        onKeyDown={handleKeyDown}
      />
      <LbInput
        ref={pwdRef}
        name="password"
        label="비밀번호"
        type="password"
        onKeyDown={handleKeyDown}
      />
      <ErrorText errorMessage={errorMessage} className="mb-1" />
      <ButtonL className="w-full">Login</ButtonL>
      <AuthNavi links={{ signup: true, findPassword: true }} />
    </form>
  );
}
