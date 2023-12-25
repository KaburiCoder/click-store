"use server";
import React from "react";
import styles from "./right-wrapper.module.scss";
import { getUser } from "@/lib/utils/user.util";
import DdUserButton from "./dd-user-button";
import DdOrderButton from "./dd-order-button";
import DdCartButton from "./dd-cart-button";

export default async function RightWrapper() {
  const user = await getUser();
  return (
    <div className={styles.wapper}>
      <DdOrderButton onTheRight={true} />
      <DdUserButton user={user} />
      <DdCartButton />
    </div>
  );
}
