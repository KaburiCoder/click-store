import { getPaymentWithVirtual } from "@/db/services/payment.service";
import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { paths } from "@/paths";
import { bankData } from "@/lib/datas/bank-data";
import db from "@/db/db";
import { cn } from "@/lib/utils/shadcn.util";
import { Separator } from "@/components/ui/separator";
import ErrorCard from "@/components/error-card";
import PaymentError from "@/components/(main-pages)/payment/payment-error";

interface Props {
  params: { orderId: string };
}
export default async function PaymentSuccessPage({ params }: Props) {
  const payment = await getPaymentWithVirtual(params.orderId);

  if (!payment) {
    return <PaymentError error="결제 데이터가 존재하지 않습니다." />;
  }

  const ymd = dayjs(payment.requestedAt).format("YYYY-MM-DD");
  const dueDateString =
    payment.virtual &&
    dayjs(payment.virtual.dueDate).format("YYYY-MM-DD HH:mm:ss");

  const cardStyles = "flex w-full max-w-[30rem] p-4 shadow";
  const linkStyles =
    "py-4 text-center w-28 text-white rounded hover:opacity-90";

  return (
    <>
      <div className="flex w-full flex-col items-center px-2 pt-16">
        <div className="pb-4 text-3xl font-bold text-blue-900">
          주문이 완료되었습니다.
        </div>

        <div className="p-4 text-xl text-black">
          주문번호: {payment.orderId}
        </div>

        <div className={cn(cardStyles, "flex flex-row")}>
          <section className="flex-1">
            <LabelText label="주문일시" text={ymd} />
            <LabelText label="주문방법" text={payment.method} />
          </section>
          <Separator className="h-auto bg-slate-200" orientation="vertical" />
          <section className="flex-1">
            <LabelText label="총 수량" text={payment.quantity} />
            <LabelText
              label="주문금액"
              text={payment.amount.toLocaleString() + "원"}
              highlight={true}
            />
          </section>
        </div>

        {payment.virtual && (
          <div className={cn(cardStyles, "mt-2")}>
            <section className="flex-1">
              <div className="text-center text-xl font-bold text-blue-900">
                가상계좌
              </div>
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
      <nav className="h-18 flex w-full justify-center gap-2 p-4">
        <Link className={cn(linkStyles, "bg-blue-500")} href={paths.orders()}>
          주문내역 확인
        </Link>
        <Link className={cn(linkStyles, "bg-rose-500")} href={paths.root()}>
          메인으로
        </Link>
      </nav>
    </>
  );
}

// export async function generateStaticParams() {
//   const result = await db.payment.findMany({
//     select: {
//       orderId: true,
//     },
//   });

//   return result.map((r) => {
//     return {
//       orderId: r.orderId,
//     };
//   });
// }

const LabelText = ({
  label,
  text,
  highlight,
}: {
  label: string;
  text: string | number | undefined;
  highlight?: boolean;
}) => {
  return (
    <div className="flex px-2 text-base">
      <div className="w-20 text-gray-500">{label}</div>
      <div className={cn("font-bold", highlight ? "text-rose-500" : "")}>
        {text}
      </div>
    </div>
  );
};
