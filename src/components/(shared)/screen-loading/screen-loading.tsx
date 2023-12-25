import React from "react";
import Backdrop from "../backdrop/backdrop";
import styles from "./screen-loading.module.scss";
import Image from "next/image";

export default function ScreenLoading() {
  return (
    <>
      <Backdrop
        className={styles.loading_backdrop}
        notScrollHidden
        zIndex={9999}
      />
      <Image
        className={styles.loading}
        width={100}
        height={100}
        src={"/gifs/loading.gif"}
        alt="loading..."
      />
    </>
  );
}
