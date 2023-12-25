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
import React from "react";
import { Button } from "../button";

interface Props {
  title: string;
  content: React.ReactNode;
  triggerComponent: React.ReactNode;
  onYes: () => void;
  description?: string;
  yesText?: string;
  noText?: string;
}

export default function YnDialog({
  description,
  title,
  content,
  triggerComponent,
  onYes,
  yesText = "네",
  noText = "아니오",
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"destructive"} className="mt-1">
              {noText}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onYes} className="mt-1">
              {yesText}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
