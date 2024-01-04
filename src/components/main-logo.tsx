import React from "react";
import Image from "next/image";
import { imgPaths, paths } from "@/paths";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function MainLogo({ className }: Props) {
  return (
    <Link href={paths.root()} className={className}>
      <Image
        className="h-header w-auto py-1.5"
        src={imgPaths.logo}
        alt="메인 로고"
        width={200}
        height={200}
      />
    </Link>
  );
}
