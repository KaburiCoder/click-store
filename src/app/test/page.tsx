"use client";
import React from "react";

export default function TestPage() {
  console.log("console.log");
  console.warn("console.warn");
  console.error("console.error");
  console.table({ a: "123", b: "456" });
  return <div></div>;
}
