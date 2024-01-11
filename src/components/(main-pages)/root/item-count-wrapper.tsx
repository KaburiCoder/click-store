"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils/shadcn.util";

interface Props {
  count?: number;
  children?: React.ReactNode;
}
export default function ItemCountWrapper({ children, count }: Props) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);

    const animationTimeout = setTimeout(() => {
      setAnimation(false);
    }, 100);

    return () => clearTimeout(animationTimeout);
  }, [count]);

  if (!count) return children;

  const countEl = (
    <div
      className={cn(
        "absolute left-4 top-0.5 z-[1003] min-w-[1.5rem] rounded-full bg-red-500 bg-opacity-90 p-1 text-white",
        animation ? "animate-count-pop" : "",
      )}
    >
      {count}
    </div>
  );

  if (!children) return countEl;

  return (
    <div className="relative">
      {countEl}
      {children}
    </div>
  );
}
