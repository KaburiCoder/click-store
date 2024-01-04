import React from "react";

interface Props {
  title: string;
  body: React.ReactNode;
}

export default function ErrorCard({ title, body }: Props) {
  return (
    <div className="my-4 flex flex-col overflow-hidden rounded-lg border-[1px] border-solid border-rose-300 bg-white shadow">
      <h2 className="bg-rose-50 p-4 text-rose-500">{title}</h2>
      <div className="text-md p-4">{body}</div>
    </div>
  );
}
