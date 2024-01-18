"use client";
import ButtonL from "@/components/ui/custom/button-l";
import React, { useEffect, useState } from "react";
import QuillPreview from "@/components/(shared)/quill-preview";
import TextQuill from "@/components/(admin)/settings/payment/text-quill";
import { usePgMessageMutate } from "@/lib/hooks/use-pg-message-mutate";
import { usePgMessageQuery } from "@/lib/hooks/use-pg-message-query";
import { toast } from "react-toastify";

export default function AdminSettingsPaymentPage() {
  const [content, setContent] = useState<string>();
  const { pgMessage, refetch } = usePgMessageQuery();
  const { isPending, saveMutate, deleteMutate } = usePgMessageMutate({
    onMutate: refetch,
  });

  function handleSave() {
    if (!content || content === "<p><br></p>") {
      toast.info("내용을 입력하세요.");
    } else {
      saveMutate(content);
    }
  }

  function handleDelete() {
    deleteMutate();
  }

  useEffect(() => {
    setContent(pgMessage);
  }, [pgMessage]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <TextQuill value={content} onChange={setContent} />
      <QuillPreview html={content} />

      <div className=" flex justify-center gap-2">
        <ButtonL className="w-20" isLoading={isPending} onClick={handleSave}>
          저장
        </ButtonL>
        <ButtonL
          className="w-20"
          variant="destructive"
          isLoading={isPending}
          onClick={handleDelete}
        >
          삭제
        </ButtonL>
      </div>
    </div>
  );
}
