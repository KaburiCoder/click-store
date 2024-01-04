"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import React, { useMemo, useState } from "react";
import { Button } from "../button";
import { InputL } from "./input-l";

interface Props {
  title: string;
  content: React.ReactNode;
  triggerComponent: React.ReactNode;
  onYes: () => void;
  description?: string;
  yesText?: string;
  noText?: string;
}

export default function CancelDialog(props: Props) {
  const cancelNumber = Math.round(Math.random() * 100);

  return (
    <Dialog>
      <DialogTrigger asChild>{props.triggerComponent}</DialogTrigger>
      <DlgContent props={props} cancelNumber={cancelNumber} />
    </Dialog>
  );
}

interface DlgContentProps {
  props: Props;
  cancelNumber: number;
}
function DlgContent({ props, cancelNumber }: DlgContentProps) {
  const {
    description,
    title,
    onYes,
    yesText = "네",
    noText = "아니오",
  } = props;
  const [cancelCode, setCancelCode] = useState("");
  const canCancel = +cancelCode === cancelNumber;

  return (
    <DialogContent className="max-w-[26rem]">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription>{description}</DialogDescription>}
      </DialogHeader>
      {/* {content} */}
      <div className="flex flex-col gap-2">
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <span>취소하시려면 번호를 입력하세요.</span>
          <span className="rounded bg-red-200 p-1 text-lg font-bold text-rose-600">
            {cancelNumber}
          </span>
        </div>
        <InputL
          label=""
          className="w-full"
          value={cancelCode}
          onChange={(e) => setCancelCode(e.target.value)}
        />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant={"destructive"} className="mt-1">
            {noText}
          </Button>
        </DialogClose>
        <DialogClose asChild disabled={!canCancel}>
          <Button onClick={onYes} className="mt-1">
            {yesText}
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
