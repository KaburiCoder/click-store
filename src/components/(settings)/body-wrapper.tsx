import React from "react";
import { Separator } from "../ui/separator";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}
export default function SettingsBodyWrapper({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="m-auto my-8 max-w-[60rem] px-10">
      <h2 className="mb-4 text-3xl text-blue-950">{title}</h2>
      <div className="text-gray-500">{description}</div>
      <Separator className="mb-8 mt-4" />
      <div className="w-full">{children}</div>
    </div>
  );
}
