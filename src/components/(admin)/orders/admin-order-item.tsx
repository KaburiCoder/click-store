import { Product } from "@/db/models/product";
import dayjs from "dayjs";
import React from "react";
import { formatYmdToShort } from "@/lib/utils/date.util";
import { cn } from "@/lib/utils/shadcn.util";
import DeliveryMethodSelect from "./delivery-method-select";
import { Badge } from "@/components/ui/badge";
import DeliverySenderSelect from "./delivery-sender.select";

interface Props {
  product: Product;
}

export default function AdminOrderItem({ product }: Props) {
  const { createDt, cs, em, pls, paymentItem } = product;

  return (
    <li className="border-red200 overflow-hidden rounded border-[1px] border-solid border-slate-400 bg-white shadow">
      {/* title */}
      <div
        className={cn(
          "flex flex-col items-start justify-between bg-slate-500 p-2 text-white",
          "sm:flex-row",
        )}
      >
        <div className="text-sm">
          <div>
            <span className="pr-2">접수일시</span>
            <span className="font-bold">
              {dayjs(createDt).format("YYYY-MM-DD HH:mm")}
            </span>
            {product.web && <Badge className="ml-2">WEB</Badge>}
          </div>
          {paymentItem?.payment?.orderId && (
            <div className="text-yellow-300">
              <span className="pr-2">주문번호</span>
              <span className="font-bold">{paymentItem.payment.orderId}</span>
            </div>
          )}
        </div>
        <div>
          <span className="pr-2 text-sm">담당자</span>
          <span className="font-bold">{em?.name}</span>
        </div>
      </div>
      {/* body */}
      <div
        className={cn(
          "grid grid-cols-2 gap-1 p-2",
          "sm:grid-cols-3",
          "md:grid-cols-2",
          "lg:grid-cols-3",
          "xl:grid-cols-5",
          "2xl:grid-cols-6",
          "3xl:grid-cols-7",
        )}
      >
        <DataWrapper label="거래처코드" data={product.csCode} />
        <DataWrapper label="거래처명칭" data={cs?.myung} />

        <DataWrapper label="상품코드" data={product.clCode} />
        <DataWrapper label="상품명칭" data={pls?.smMyung} />
        <DataWrapper label="수량" data={product.count} />
        <DataWrapper label="단가" data={pls?.danga.toLocaleString()} />
        <DataWrapper
          label="금액"
          data={((pls?.danga ?? 0) * product.count).toLocaleString()}
        />
        <DataWrapper label="발주일" data={formatYmdToShort(product.sellYmd)} />
        <DataWrapper label="발주여부" data={product.etc1} />
        <DataWrapper
          label="배송방법"
          data={
            <DeliveryMethodSelect
              productAuto={product.auto}
              orderCheck={product.orderCheck}
            />
          }
        />
        <DataWrapper
          label="배송자"
          data={
            <DeliverySenderSelect
              productAuto={product.auto}
              seller={product.seller}
            />
          }
        />
        <DataWrapper
          label="완료여부"
          data={product.sell === "1" ? "완료" : "접수"}
        />
        <DataWrapper
          label="비고"
          data={cs?.myung}
          className={cn(
            "col-span-2",
            "sm:col-span-3",
            "md:col-span-2",
            "lg:col-span-3",
            "xl:col-span-5",
            "2xl:col-span-6",
            "3xl:col-span-7",
          )}
        />
      </div>
    </li>
  );
}

interface DataWrapperProps {
  label: string;
  data?: React.ReactNode;
  className?: string;
}
function DataWrapper({ className, label, data }: DataWrapperProps) {
  return (
    <div className={cn("rounded bg-slate-200 p-1", className)}>
      <div className="pb-1 text-sm text-slate-500">{label}</div>
      <div className="font-bold">{data}</div>
    </div>
  );
}
