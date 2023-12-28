"use client";
import React from "react";
import styles from "./left-wrapper.module.scss";
import DdOrderButton from "./dd-order-button";
import DdMenuButton from "./dd-menu-button";

export default function LeftWrapper() {
  return (
    <div className={styles.wrapper}>
      <DdMenuButton />
      <DdOrderButton onTheRight={false} />
    </div>
  );
}
