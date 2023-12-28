import { getPaymentWithVirtual } from "@/db/services/payment.service";
import React from "react";
import styles from "./page.module.scss";
import dayjs from "dayjs";
import Link from "next/link";
import { paths } from "@/paths";
import { bankData } from "@/lib/datas/bank-data";
import db from "@/db/db";

interface Props {
  params: { orderId: string };
}
export default async function PaymentSuccessPage({ params }: Props) {
  const payment = await getPaymentWithVirtual(params.orderId);

  if (!payment) {
    throw new Error("데이터가 존재하지 않습니다.");
  }

  const ymd = dayjs(payment.requestedAt).format("YYYY-MM-DD");
  const dueDateString =
    payment.virtual &&
    dayjs(payment.virtual.dueDate).format("YYYY-MM-DD HH:mm:ss");

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>주문이 완료되었습니다.</div>
        <div className={styles.order_id}>주문번호: {payment.orderId}</div>

        <div className={`shadow ${styles.detail}`}>
          <section className={styles.detail_section}>
            <LabelText label="주문일시" text={ymd} />
            <LabelText label="주문방법" text={payment.method} />
          </section>
          <div className={styles.separator} />
          <section className={styles.detail_section}>
            <LabelText label="총 수량" text={payment.quantity} />
            <LabelText
              label="주문금액"
              text={payment.amount.toLocaleString() + "원"}
              highlight={true}
            />
          </section>
        </div>

        {payment.virtual && (
          <div className={`shadow ${styles.detail} ${styles.virtual_info}`}>
            <section className={styles.detail_section}>
              <div className={styles.virtual_info__title}>가상계좌</div>
              <LabelText
                label="은행"
                text={bankData[payment.virtual.bankCode]}
              />
              <LabelText
                label="계좌번호"
                text={payment.virtual.accountNumber}
              />
              <LabelText label="만료일시" text={dueDateString!} />
            </section>
          </div>
        )}
      </div>
      <nav className={styles.nav_wrapper}>
        <Link href={paths.orders()} className={styles.nav_orders}>
          주문내역 확인
        </Link>
        <Link href={paths.root()} className={styles.nav_main}>
          메인으로
        </Link>
      </nav>
    </>
  );
}

export async function generateStaticParams() {
  const result = await db.payment.findMany({
    select: {
      orderId: true,
    },
  });

  return result.map((r) => {
    return {
      orderId: r.orderId,
    };
  });
}

const LabelText = (props: {
  label: string;
  text: string | number | undefined;
  highlight?: boolean;
}) => {
  return (
    <div className={styles.label_text}>
      <div className={styles.label}>{props.label}</div>
      <div
        className={`${styles.text} ${props.highlight && styles.highlight_text}`}
      >
        {props.text}
      </div>
    </div>
  );
};
