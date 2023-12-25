"use client";
import React from "react";
import { Button, buttonVariants } from "../button";
import { Loader2 } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { VariantProps } from "class-variance-authority";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export default function ButtonL({ isLoading, children, ...props }: Props) {
  const { pending } = useFormStatus();
  const showLoading = isLoading || pending;

  return (
    <Button {...props} disabled={showLoading}>
      {showLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}
