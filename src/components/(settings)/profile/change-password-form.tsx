import ErrorText from "@/components/(shared)/error-text";
import { Button } from "@/components/ui/button";
import { InputL } from "@/components/ui/custom/input-l";
import { changePasswordAction } from "@/db/client-actions/change-password.action";
import { stringsToText } from "@/lib/utils/strings.util";
import { useMutation } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ChangePasswordForm() {
  const [prevPassword, setPrevPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { data, error, isPending, isSuccess, mutate } = useMutation({
    mutationFn: changePasswordAction,
  });

  const { errors } = data || {};
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    mutate({ prevPassword, password, confirmPassword });
  }

  const clearInputs = useCallback(() => {
    setPrevPassword("");
    setPassword("");
    setConfirmPassword("");
  }, [setPrevPassword, setPassword, setConfirmPassword]);

  useEffect(() => {
    if (isSuccess && !errors && !isPending) {
      toast.success("성공적으로 비밀번호가 변경되었습니다.");
      clearInputs();
    }
  }, [errors, isSuccess, isPending, clearInputs]);

  return (
    <form className="ml-1" onSubmit={handleSubmit}>
      <InputL
        type="password"
        id="prev-password"
        name="prev-password"
        label="기존 비밀번호"
        className="mb-1.5"
        value={prevPassword}
        onChange={(e) => setPrevPassword(e.target.value)}
        errorMessage={stringsToText(errors?.prevPassword)}
      />
      <InputL
        type="password"
        id="new-password"
        name="new-password"
        label="변경할 비밀번호"
        className="mb-1.5"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={stringsToText(errors?.password)}
      />
      <InputL
        type="password"
        id="confirm-password"
        name="confirm-password"
        label="비밀번호 재확인"
        className="mb-1.5"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        errorMessage={stringsToText(errors?.confirmPassword)}
      />
      <ErrorText
        errorMessage={error?.message || stringsToText(errors?._form)}
      />
      <Button disabled={isPending}>변경</Button>
    </form>
  );
}
