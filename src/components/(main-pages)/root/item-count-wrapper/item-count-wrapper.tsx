"use client";
import React, { useEffect, useState } from "react";
import styles from "./item-count-wrapper.module.scss";
import classNames from "classnames";

interface Props {
  count?: number;
  children?: React.ReactNode;
}
export default function ItemCountWrapper({ children, count }: Props) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);

    const animationTimeout = setTimeout(() => {
      setAnimation(false);
    }, 100);

    return () => clearTimeout(animationTimeout);
  }, [count]);

  const animationStyles = classNames(
    styles.count,
    animation ? styles.animate : undefined
  );

  if (!count) return children;

  const countEl = <div className={animationStyles}>{count}</div>;

  if (!children) return countEl;

  return (
    <div className={styles.wrapper}>
      {countEl}
      {children}
    </div>
  );
}
