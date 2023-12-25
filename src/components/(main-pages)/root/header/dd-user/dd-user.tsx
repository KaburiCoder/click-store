const dynamic = "force-dynamic";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import styles from "./dd-user.module.scss";
import { UserProps } from "@/lib/props/fetch-get-user.props";
import { paths } from "@/paths";
import LinkButton from "./link-button/link-button";
import { MdManageAccounts } from "react-icons/md";
import { BiBasket } from "react-icons/bi";
import { logoutAction } from "@/db/actions/auth";

interface Props extends UserProps {
  onLinkClick: () => void;
}

export default function DdUser({ user, onLinkClick }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <div className={styles.header__left__title}>
            <div>{user?.name}</div>
            <Link href={paths.profile()} className={styles.setting_link}>
              <IoSettingsOutline />
            </Link>
          </div>
          <div className={styles.header__left__sub}>{user?.ykiho}</div>
          <div className={styles.header__left__sub}>{user?.saupkiho}</div>
        </div>
        <div>
          <form action={logoutAction}>
            <button className={styles["shop-button"]}>로그아웃</button>
          </form>
        </div>
      </div>
      <ul className={styles.link_ul}>
        {user?.admin && (
          <LinkButton
            href="/admin/orders"
            text="관리자 페이지"
            icon={MdManageAccounts}
            admin
            onLinkClick={onLinkClick}
          />
        )}
        <LinkButton
          href="/orders"
          text="주문 내역 보기"
          icon={BiBasket}
          onLinkClick={onLinkClick}
        />
      </ul>
    </div>
  );
}
