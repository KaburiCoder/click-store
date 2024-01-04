"use client";
import React from "react";
import Error from "../error";

export default function ErrorPage() {
  return <Error error={{ message: "", name: "" }} reset={() => { }} />;
}
