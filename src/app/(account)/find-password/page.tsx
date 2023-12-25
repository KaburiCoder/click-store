import AccTitle from "@/components/(account-pages)/acc-title/acc-title";
import AuthNavi from "@/components/(account-pages)/auth-navi";
import FindPasswordForm from "@/components/(account-pages)/find-password/find-password-form";
import React from "react";

export default function FindPasswordPage() {
  return (
    <>
      <AccTitle title="비밀번호 찾기" />
      <FindPasswordForm />
      <AuthNavi links={{ login: true, signup: true }} />
    </>
  );
}
