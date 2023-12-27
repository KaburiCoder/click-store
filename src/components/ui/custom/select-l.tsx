import React, { useCallback, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../select";
import { cn } from "@/lib/utils/shadcn.util";

interface Props {
  id?: string;
  selectLabel?: string;
  placeholder?: string;
  object?: { [key: string]: string };
  className?: string;
  value?: string;
  disabled?: boolean;
  onCloseUp?: (value: string) => void;
  onValueChange?: (value: string) => void;
  onValueChanged?: (value: string) => void;
  onOpenChange?: (value: boolean) => void;
}

let tryOpen = false;
export default function SelectL({
  className,
  placeholder,
  object,
  selectLabel,
  id,
  value,
  disabled,
  onCloseUp,
  onValueChange,
  onValueChanged,
  onOpenChange,
}: Props) {
  const [v, setV] = useState<string>();
  const [open, setOpen] = useState(false);

  function handleOpenChange(open: boolean): void {
    tryOpen = true;
    setOpen(open);
    onOpenChange?.(open);
  }

  useEffect(() => {
    if (!tryOpen) return;
    if (open) return;

    onCloseUp?.(v ?? "");
    if (v !== value) {
      onValueChanged?.(v ?? "");
    }
    tryOpen = false;
  }, [open, v, value, onCloseUp, onValueChanged]);

  useEffect(() => {
    setV(value);
  }, [setV, value]);

  function handleValueChange(value: string): void {
    setV(value);
    onValueChange?.(value);
  }

  return (
    <Select
      onValueChange={handleValueChange}
      onOpenChange={handleOpenChange}
      value={v}
    >
      <SelectTrigger disabled={disabled} className={cn("w-full", className)}>
        <SelectValue placeholder={placeholder} id={id} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectLabel}</SelectLabel>
          {object &&
            [...Object.keys(object)].map((bankCode, i) => (
              <SelectItem key={i} value={bankCode}>
                {object[bankCode]}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
