"use client";
import { toolbarOptions } from "@/configs/quill.config";
import React, { useState } from "react";
import ReactQuill from "react-quill";

export default function TestPage() {
  const [content, setContent] = useState("");

  return (
    <div className="h-full w-full">
      <button onClick={() => { }}>강제 에러 발생 테스트</button>
      <ReactQuill onChange={setContent} modules={{ toolbar: toolbarOptions }} />
      <div>{content}</div>
      <div className="quill h-96 w-full">
        <div
          className="ql-container ql-snow"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <div className="ql-snow">
        <div className="ql-editor">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
