import React from "react";
import styles from "./cart-view-table.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function CartViewTable({ children }: Props) {
  return (
    <div className={styles.container}>
      <table>
        <caption className={styles.caption}>장바구니 목록</caption>
        <colgroup>
          <col width={50} />
          <col span={2} width="*" />
          <col width={100} />
        </colgroup>

        {children}
      </table>
    </div>
  );
}
