import React from "react";

interface Props {
  html?: string | TrustedHTML;
}

export default function QuillPreview({ html }: Props) {
  return (
    <div className="ql-snow flex flex-col bg-white p-4 shadow">
      <h2 className="mb-4 rounded">미리보기</h2>
      <div
        className="ql-editor border border-solid border-slate-300 p-2"
        dangerouslySetInnerHTML={{ __html: html! }}
      ></div>
    </div>
  );
}
