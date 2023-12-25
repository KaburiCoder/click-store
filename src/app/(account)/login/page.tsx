import React from "react";
import AccTitle from "@/components/(account-pages)/acc-title/acc-title";
import LoginForm from "@/components/(account-pages)/login/login-form";
import { getAccountByUserId } from "@/db/services/account.service";
import { redirect } from "next/navigation";
import { paths } from "@/paths";

interface Props {
  searchParams: {
    uid: string;
  };
}
export default async function LoginPage({ searchParams: { uid } }: Props) {
  const account = await getAccountByUserId(uid);

  if (!account) {
    redirect(paths.signupWithUid(uid));
  }

  return (
    <>
      <AccTitle title="Login Account" />
      <LoginForm uid={uid} />
    </>
  );
}
