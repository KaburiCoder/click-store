import React from "react";
import styles from "./right-wrapper.module.scss";
import DdUserButton from "./dd-user-button";
import DdOrderButton from "./dd-order-button";
import DdCartButton from "./dd-cart-button";

export default function RightWrapper() {
  return (
    <div className={styles.wapper}>
      <DdOrderButton onTheRight={true} />
      <DdUserButton />
      <DdCartButton />
    </div>
  );
}
