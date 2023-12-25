"use client";

import { useFormStatus } from "react-dom";

export function SaveButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>Save-{pending ? "진행중..." : ""}</button>;
}
