"use client";
import { GetAdminPaymentsForTableDto } from "@/db/dto/payment/get-admin-payments-for-table.dto";
import { QKey } from "@/db/keys";
import { getAdminPaymentsForTable } from "@/db/services/payment.service";
import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { AdminWOTable, AdminWOTableRef } from "./table/admin-wo-table";
import { useAdminSearchBarStore } from "@/store/admin-search-bar.store";
import SearchBar from "../search-bar";
import ButtonL from "@/components/ui/custom/button-l";
import { saveExcel } from "./table/save-excel";
import { LottieLoading } from "@/components/custom/lottie-loading";
import dayjs from "dayjs";

function fetchAdminPaymentsForTable(dto: GetAdminPaymentsForTableDto) {
  return getAdminPaymentsForTable(dto);
}
export default function AdminWebOrderTable() {
  const { searchData, searchToggle } = useAdminSearchBarStore();
  const { data, isLoading } = useQuery({
    queryKey: [QKey.fetchAdminPaymentsWithItems, searchToggle],
    queryFn: () =>
      fetchAdminPaymentsForTable({
        dateFrom: searchData?.dateFrom!,
        dateTo: searchData?.dateTo!,
      }),
    gcTime: 1,
    enabled: !!searchData,
  });

  const payments = data?.payments || [];
  const tableRef = useRef<AdminWOTableRef>(null);

  function handleSaveExcel(): void {
    const table = tableRef.current?.getTable();
    if (table) {
      const sYmd = dayjs(searchData?.dateFrom).format("YYYY-MM-DD");
      const eYmd = dayjs(searchData?.dateTo).format("YYYY-MM-DD");
      saveExcel(table, `웹주문내역(${sYmd}~${eYmd})`);
    }
  }

  return (
    <>
      <SearchBar
        showManager={false}
        showSearchString={false}
        showTest={false}
        rItems={
          <ButtonL variant="green" type="button" onClick={handleSaveExcel}>
            XSLX
          </ButtonL>
        }
      />

      {isLoading ? (
        <LottieLoading className="m-auto mt-20 w-72" />
      ) : (
        <AdminWOTable ref={tableRef} payments={payments} />
      )}
    </>
  );
}
