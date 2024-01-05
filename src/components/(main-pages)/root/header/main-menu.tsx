"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { QKey } from "@/db/keys";
import { fetchWebBunryuList } from "@/db/client-queries/fetch-web-bunryu-list";
import { cn } from "@/lib/utils/shadcn.util";

interface Props {
  isDropdown?: boolean;
  onClose?: () => void;
}

export default function MainMenu({ onClose }: Props) {
  const { data } = useQuery({
    queryKey: [QKey.fetchWebBunryuList],
    queryFn: fetchWebBunryuList,
  });

  console.log("data", data);

  const handleLink = (key: string) => {
    scrollToTargetAdjusted(key);
    onClose?.();
  };

  function scrollToTargetAdjusted(id: string) {
    const element = document.getElementById(id);

    if (!element) return;

    const offsetHeight = +document.documentElement.style
      .getPropertyValue("--main-nav-height")
      .replace("px", "");
    const headerOffset = 55 + (isNaN(offsetHeight) ? 0 : offsetHeight);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  // if ((!props.isDropdown && isMobile) || window.location.pathname !== "/") {
  //   return <></>;
  // }

  const linkComponents = data?.map((w) => {
    return (
      <li key={w.code}>
        <button
          className={cn(
            "w-full rounded bg-blue-500 p-2.5 text-left text-base text-slate-50 hover:bg-blue-500/90",
            "md:bg-transparent",
          )}
          onClick={handleLink.bind(null, w.code)}
        >
          {w.name}
        </button>
      </li>
    );
  });

  return (
    <ul
      className={cn(
        "relative flex h-full flex-col items-center gap-2 p-2",
        "md:flex-row md:justify-center md:bg-blue-400 md:p-0",
      )}
    >
      {linkComponents}
    </ul>
  );
}
