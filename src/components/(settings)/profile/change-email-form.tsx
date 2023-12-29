import { Button } from "@/components/ui/button";
import { InputL } from "@/components/ui/custom/input-l";
import { changeEmailAction } from "@/db/client-actions/change-email.action";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function ChangeEmailForm() {
  const [email, setEmail] = useState("");
  const { update } = useSession();
  const { data, isPending, isSuccess, mutate } = useMutation({
    mutationFn: changeEmailAction,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    mutate({ email });
  }

  useEffect(() => {
    if (isSuccess && !data.errorMessage) {
      update({ email: email });
      toast.success("정상적으로 변경되었습니다.");
      setEmail("");
    }
  }, [isSuccess, data?.errorMessage]);

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
