"use client";
import React, { MutableRefObject, useRef } from "react";
import styles from "./left-wrapper.module.scss";
import { BunryuObjectProps } from "@/lib/props/bunryu-object.props";
import DdOrderButton from "./dd-order-button";
import DdMenuButton from "./dd-menu-button";

interface Props extends BunryuObjectProps { }

export default function LeftWrapper({ bunryuObjects }: Props) {
  return (
    <div className={styles.wrapper}>
      <DdMenuButton bunryuObjects={bunryuObjects} />
      <DdOrderButton onTheRight={false} />
    </div>
  );
}
