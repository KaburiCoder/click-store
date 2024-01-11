import Link from "next/link";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils/shadcn.util";

interface LinkButtonProps {
  icon: IconType;
  href: string;
  text: string;
  admin?: boolean;
  onLinkClick: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  icon: Icon,
  text,
  admin,
  onLinkClick,
}: LinkButtonProps) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "mb-2 flex w-full items-center rounded-xl p-2",
          "hover:bg-opacity-80",
          admin ? "text-rose-500" : "text-blue-900",
          admin ? "hover:bg-red-200" : "hover:bg-blue-200",
        )}
        onClick={onLinkClick}
      >
        <Icon
          className={cn(
            "mr-2 h-8 w-8",
            admin ? "text-rose-500" : "text-blue-600",
          )}
        />
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default LinkButton;
