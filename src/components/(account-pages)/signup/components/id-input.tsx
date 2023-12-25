"use client";
import { InputL } from "@/components/ui/custom/input-l";
import { Separator } from "@/components/ui/separator";
import { fetchCheckUserId } from "@/db/client-queries/fetch-check-user-id";
import { fetchGetCsByUserId } from "@/db/client-queries/fetch-get-cs-by-user-id";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  uid?: string;
  errorMessage?: string;
}
export default function IdInput({ uid, errorMessage, ...props }: Props) {
  const [id, setId] = useState("");
  const { data: idExists } = useQuery({
    queryKey: ["a", id],
    queryFn: () => fetchCheckUserId(id),
    enabled: id.length >= 8,
    gcTime: 60,
  });
  const { data: cs } = useQuery({
    queryKey: ["b", id],
    queryFn: () => fetchGetCsByUserId(id),
    enabled: id.length >= 8,
    gcTime: 60,
  });

  useEffect(() => {
    if (uid) setId(uid);
  }, [uid]);

  const existsError = idExists ? "이미 존재하는 계정입니다." : "";
  const errMsg = errorMessage ? errorMessage : existsError;

  return (
    <>
      <InputL
        label="요양기관 or 사업자기호"
        value={id}
        errorMessage={errMsg}
        {...props}
        onChange={(e) => setId(e.target.value)}
      />
      {cs && (
        <div className="flex flex-col gap-2 p-2 shadow">
          <div>
            <div className="pb-1 text-blue-600">기관명칭</div>
            <div className="font-bold text-gray-700">{cs.myung} </div>
          </div>
          <Separator />
          <div>
            <div className="pb-1 text-blue-600">대표자명</div>
            <div className="font-bold text-gray-700">{cs.daepyo} </div>
          </div>
        </div>
      )}
    </>
  );
}
