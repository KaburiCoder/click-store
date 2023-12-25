import { Button } from "@/components/ui/button";
import { InputL } from "@/components/ui/custom/input-l";
import { changeEmailAction } from "@/db/client-actions/change-email.action";
import useSvrCookieStore from "@/store/svr-cookie.store";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function ChangeEmailForm() {
  const { toggleCookie } = useSvrCookieStore();
  const [email, setEmail] = useState("");
  const { data, isPending, isSuccess, mutate } = useMutation({
    mutationFn: changeEmailAction,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    mutate({ email });
  }

  useEffect(() => {
    if (isSuccess && !data.errorMessage) {
      toggleCookie();
      toast.success("정상적으로 변경되었습니다.");
      setEmail("");
    }
  }, [isSuccess]);

  return (
    <form className="ml-1" onSubmit={handleSubmit}>
      <InputL
        type="email"
        id="email"
        name="email"
        label="e-mail"
        className="mb-1.5"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={data?.errorMessage}
      />
      <Button disabled={isPending}>변경</Button>
    </form>
  );
}
