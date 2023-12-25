import React from "react";
import styles from "./layout.module.scss";
import MainHeader from "@/components/(main-pages)/root/header/main-header";
import { getBunryuObjectList } from "@/db/queries/main-page.query";
import MainFooter from "@/components/(main-pages)/root/main-footer/main-footer";

export default async function MainLayout({ children }: any) {
  const bunryuObjects = await getBunryuObjectList();

  return (
    <>
      <div className={styles.wrapper}>
        <MainHeader bunryuObjects={bunryuObjects} />
        <main>{children}</main>
        <MainFooter />
      </div>
    </>
  );
}
