import React from "react";
import styles from "./cart-view-empty.module.scss";
import Image from "next/image";
import { imgPaths } from "@/paths";

export default function CartViewEmpty() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          className={styles.img}
          src={imgPaths.emptyCart}
          width={500}
          height={500}
          alt="카트이미지"
        />
        <div className={styles.text_container}>
          <label className={styles.text}>장바구니가 비었어요!</label>
        </div>
      </div>
    </div>
  );
}
