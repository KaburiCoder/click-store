import React from "react";
import styles from "./main-header.module.scss";
import Image from "next/image";
import LeftWrapper from "./left-wrapper";
import RightWrapper from "./right-wrapper";
import MainMenuNav from "./main-menu-nav";
import Link from "next/link";
import { imgPaths } from "@/paths";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LeftWrapper />
        <Link href={"/"}>
          <Image
            className={styles.logo}
            src={imgPaths.logo}
            alt="메인 아이콘"
            width={200}
            height={200}
          />
        </Link>
        <RightWrapper />
      </div>

      <MainMenuNav />
    </header>
  );
}
