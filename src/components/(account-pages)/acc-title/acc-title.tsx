import React from "react";

export default function AccTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-5 text-center text-2xl font-bold text-blue-900">
      {title}
    </h2>
  );
}
