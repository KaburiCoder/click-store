import React from "react";
import styles from "./m-title.module.scss";
import classNames from "classnames";

export default function MTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <h3 className={classNames(styles.title, className)}>{title}</h3>;
}
