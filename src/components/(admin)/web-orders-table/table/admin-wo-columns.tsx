import { Payment } from "@/db/models/payment";
import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";

const columnHelper = createColumnHelper<Payment>();

export const adminWOColumns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    minSize: 500,
  }),
  columnHelper.accessor("requestedAt", {
    header: () => "주문일",
    cell: (info) => dayjs(info.getValue()).format("YYYY-MM-DD"),
  }),

  columnHelper.accessor("approvedAt", {
    cell: (info) => dayjs(info.getValue()).format("YYYY-MM-DD HH:mm:ss"),
    header: () => "결제일시",
    meta: {
      columnName: "결제일시",
      excelWidth: 23,
    },
  }),
  columnHelper.accessor("cs.saupnum", {
    header: () => "사업자 번호",
    minSize: 500,
    meta: {
      columnName: "사업자번호",
      excelWidth: 20,
    },
  }),
  columnHelper.accessor("customerName", {
    cell: (info) => info.getValue(),
    header: () => "거래처명",
    meta: {
      columnName: "거래처명",
      excelWidth: 30,
    },
  }),
  columnHelper.accessor("method", {
    header: () => "결제방식",
    cell: (info) => info.renderValue()?.toLocaleString(),
    meta: {
      columnName: "결제방식",
    },
  }),
  columnHelper.accessor("amount", {
    header: () => "금액",
    cell: (info) => info.renderValue()?.toLocaleString(),
    meta: {
      align: "right",
      columnName: "금액",
      excelWidth: 10,
    },
  }),
];
