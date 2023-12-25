import React from "react";

interface Props {
  title: string;
  description: string | undefined;
}
export default function TitleAndDesc({ title, description }: Props) {
  return (
    <div className="flex flex-col items-start">
      <div>{title}</div>
      <div className="mt-1 text-sm text-gray-500 hover:no-underline">
        {description}
      </div>
    </div>
  );
}
