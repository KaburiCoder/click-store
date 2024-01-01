import { cn } from "@/lib/utils/shadcn.util";

interface LabelTextProps {
  label: string;
  labelClassName?: string;
  text?: string;
  bothClassName?: string;
}

export default function LabelText({
  label,
  text,
  labelClassName,
  bothClassName,
}: LabelTextProps) {
  return (
    <div className="flex items-start justify-between py-1 text-sm">
      <span
        className={cn(
          "min-w-[5rem]  text-slate-500",
          labelClassName,
          bothClassName,
        )}
      >
        {label}
      </span>
      <span
        className={cn("flex-0 break-words text-base font-bold", bothClassName)}
      >
        {text}
      </span>
    </div>
  );
}
