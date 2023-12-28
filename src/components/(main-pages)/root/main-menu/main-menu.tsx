"use client";
import React from "react";
import styles from "./main-menu.module.scss";
import { useQuery } from "@tanstack/react-query";
import { QKey } from "@/db/keys";
import { fetchWebBunryuList } from "@/db/client-queries/fetch-web-bunryu-list";

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
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

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
      <li className={styles.li} key={w.code}>
        <button onClick={handleLink.bind(null, w.code)}>{w.name}</button>
      </li>
    );
  });

  return <ul className={styles.ul}>{linkComponents}</ul>;
}
