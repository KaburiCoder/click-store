"use client";
import CenterLoader2 from "@/components/center-loader2";
import "./text-quil.css";
import { toolbarOptions } from "@/configs/quill.config";
import dynamic from "next/dynamic";
import React from "react";
import { ReactQuillProps } from "react-quill";
import { cn } from "@/lib/utils/shadcn.util";
const ReactQuill = dynamic(() => import("react-quill"), {
  loading: () => <CenterLoader2 />,
  ssr: false,
});

export default function TextQuill({ value, onChange }: ReactQuillProps) {
  return (
    <div className={cn("wrapper overflow-hidden bg-white")}>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={{ toolbar: toolbarOptions }}
      />
    </div>
  );
}
