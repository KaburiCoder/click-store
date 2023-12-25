import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/shadcn.util";
import { IconType } from "react-icons";

interface ButtonItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  text: string;
}

export function ButtonItem({
  Icon,
  text,
  className,
  ...props
}: ButtonItemProps) {
  return (
    <Button
      variant={"ghost"}
      className={cn(
        "relative flex w-full items-center rounded p-2 text-base",
        className,
      )}
      {...props}
    >
      <Icon className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 transform" />
      {text}
    </Button>
  );
}
