import AccTitle from "@/components/(account-pages)/acc-title/acc-title";
import ChangePasswordForm from "@/components/(account-pages)/change-password/change-password-form";
import UnauthenticatedChangePassword from "@/components/(account-pages)/change-password/unauthenticated-change-password";
import { getAccountByToken } from "@/db/services/account.service";
import React from "react";

interface Props {
  searchParams: { [key: string]: string };
}
export default async function ChangePasswordPage({ searchParams }: Props) {
  const uid = searchParams["uid"];
  const key = searchParams["key"];
  let component: React.ReactNode;

  if (uid && key) {
    const account = await getAccountByToken({ userId: uid, token: key });
    if (account) {
      component = (
        <ChangePasswordForm searchParams={{ userId: uid, token: key }} />
      );
    } else {
      component = <UnauthenticatedChangePassword />;
    }
  } else {
    component = <UnauthenticatedChangePassword />;
  }

  return (
    <>
      <AccTitle title="비밀번호 변경" />
      {component}
    </>
  );
}
