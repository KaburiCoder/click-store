"use client";
import ScreenLoading from "@/components/(shared)/screen-loading";
import React, { useState } from "react";

export default function TestPage() {
  const [error, setError] = useState(false);
  console.log("console.log");
  console.warn("console.warn");
  console.error("console.error");
  console.table({ a: "123", b: "456" });

  if (error) throw new Error("강제 에러 발생 ㅠㅠ");

  return (
    <div className="h-full w-full bg-red-500">
      <button
        onClick={() => {
          setError(true);
        }}
      >
        강제 에러 발생 테스트
      </button>
    </div>
  );
}
