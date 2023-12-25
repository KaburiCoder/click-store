"use client";
import React from "react";
import ButtonL from "@/components/ui/custom/button-l";
import { InputL } from "@/components/ui/custom/input-l";
import { useFormState } from "react-dom";
import {
  SearchParamsArgs,
  changeNewPasswordAction,
} from "@/db/actions/change-new-password.action";
import { stringsToText } from "@/lib/utils/strings.util";
import ErrorText from "@/components/(shared)/error-text";
import SuccessChangePassword from "./success-change-password";

interface Props {
  searchParams: SearchParamsArgs;
}

export default function ChangePasswordForm({ searchParams }: Props) {
  const [state, action] = useFormState(
    changeNewPasswordAction.bind(null, searchParams),
    {},
  );
  const { success, errors } = state;

  if (success) {
    return <SuccessChangePassword />;
  }

  return (
    <form className="flex flex-col gap-1" action={action}>
      <InputL
        label="새 비밀번호"
        name="password"
        type="password"
        errorMessage={stringsToText(errors?.password)}
      />
      <InputL
        label="새 비밀번호 확인"
        name="confirmPassword"
        type="password"
        errorMessage={stringsToText(errors?.confirmPassword)}
      />
      <ErrorText errorMessage={errors?.errorMessage} />
      <ButtonL className="mt-1">변경</ButtonL>
    </form>
  );
}
