"use client";
import { useMinMediaQuery } from "@/lib/hooks/use-min-media-query";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import MainMenu from "@/components/(main-pages)/root/main-menu/main-menu";
import React, { useEffect } from "react";
import styles from "./main-menu-nav.module.scss";
import { usePathname } from "next/navigation";
import useResizeObserver from "use-resize-observer";

interface Props extends BunryuObjectProps { }

export default function MainMenuNav({ bunryuObjects }: Props) {
  const pathname = usePathname();
  const { ref, height = 0 } = useResizeObserver<HTMLElement>();
  const { matches: min768 } = useMinMediaQuery(768);
  const isNotVisible = !min768 || !(pathname === "/" || pathname === "/add-to-cart");

  // 메인화면 Nav창이 없을 때 동적으로 margin-top 수정
  // (main-pages)/layout.module.scss
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--main-nav-height",
      `${isNotVisible ? 0 : height}px`
    );
  }, [height, isNotVisible]);

  if (isNotVisible) return <></>;

  return (
    <nav ref={ref} className={`${styles.nav}`}>
      <MainMenu bunryuObjects={bunryuObjects} />
    </nav>
  );
}
