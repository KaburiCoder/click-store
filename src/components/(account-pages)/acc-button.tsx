"use client";

import classnames from "classnames";
import React from "react";
import { useFormStatus } from "react-dom";
import styles from "./acc-button.module.scss";

export default function AccButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={classnames("cst-blue-btn", styles.button)}
      disabled={pending}
    >
      {text}
    </button>
  );
}
