import React from "react";
import styles from "./custom-li.module.scss";

const CustomLi: React.FC<{ title: string; text?: string; children?: any }> = (
  props
) => {
  return (
    <li className={styles.li}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.colon}>:</span>
      {props.text && <span className={styles.data}>{props.text}</span>}
      {props.children && props.children}
    </li>
  );
};

export default CustomLi;
