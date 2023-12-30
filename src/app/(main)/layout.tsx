import React from "react";
import styles from "./layout.module.scss";
import MainHeader from "@/components/(main-pages)/root/header/main-header";
import MainFooter from "@/components/(main-pages)/root/main-footer";
import { ChildrenProps } from "@/lib/props/children.props";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <div className={styles.wrapper}>
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </div>
    </>
  );
}
