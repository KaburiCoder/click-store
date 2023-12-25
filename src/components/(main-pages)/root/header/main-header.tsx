import React from "react";
import styles from "./main-header.module.scss";
import Image from "next/image";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import LeftWrapper from "./left-wrapper";
import RightWrapper from "./right-wrapper";
import MainMenuNav from "./main-menu-nav";
import Link from "next/link";
import { imgPaths } from "@/paths";

interface Props extends BunryuObjectProps { }

export default function MainHeader({ bunryuObjects }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LeftWrapper bunryuObjects={bunryuObjects} />
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

      <MainMenuNav bunryuObjects={bunryuObjects} />
    </header>
  );
}
