"use client";
import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "../ui/custom/date-range-picker";
import { useQuery } from "@tanstack/react-query";
import fetchGetManagers from "@/db/client-queries/fetch-get-managers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { QKey } from "@/db/keys";
import { Input } from "../ui/input";
import ButtonL from "../ui/custom/button-l";
import { DateRange } from "react-day-picker";
import ErrorText from "../(shared)/error-text";
import { useAdminSearchBarStore } from "@/store/admin-search-bar.store";
import CheckBoxL from "../ui/custom/check-box-l";

interface Props {
  showManager?: boolean;
  showSearchString?: boolean;
  showTest?: boolean;
  rItems?: React.ReactNode;
}

export default function SearchBar({
  showManager = true,
  showSearchString = true,
  showTest = true,
  rItems,
}: Props) {
  const [dateRange, setDateRange] = useState<DateRange>();
  const [manager, setManager] = useState<string>();
  const [searchString, setSearchString] = useState<string>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const { setSearchData, clear: clearSearchData } = useAdminSearchBarStore();
  const { data } = useQuery({
    queryKey: [QKey.fetchGetManagers],
    queryFn: fetchGetManagers,
  });

  useEffect(() => {
    return () => {
      clearSearchData();
    };
  }, [clearSearchData]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!dateRange?.to && !dateRange?.from) {
      setErrorMessage("날짜를 먼저 선택하세요.");
    }
    setErrorMessage("");

    setSearchData({
      dateFrom: dateRange?.from!,
      dateTo: dateRange?.to ?? dateRange?.from!,
      manager: manager === "전체" ? "" : manager,
      searchString,
      showAdmin: isAdmin,
    });
  }

  return (
    <div className="sticky top-0 bg-slate-100 shadow">
      <form className="flex flex-col gap-1 p-1" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-1">
          <DateRangePicker onDateChange={setDateRange} />
          {showManager && (
            <Select onValueChange={setManager}>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="담당자" id="manager" />
              </SelectTrigger>
              <SelectContent onChange={(e) => {}}>
                <SelectGroup>
                  <SelectLabel>-- 담당자 선택 --</SelectLabel>
                  <SelectItem value="전체">전체</SelectItem>
                  {data?.map((data) => (
                    <SelectItem key={data.code} value={data.code}>
                      {data.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}

          {showSearchString && (
            <Input
              placeholder="거래처명 or 주문번호"
              className="max-w-[12rem]"
              onChange={(e) => setSearchString(e.target.value.trim())}
            />
          )}

          <ButtonL>조회</ButtonL>
          {rItems}
          {showTest && (
            <CheckBoxL
              label="TEST"
              labelLocation="bottom"
              onCheckedChange={(e) => setIsAdmin(e as boolean)}
            />
          )}
        </div>
        <ErrorText errorMessage={errorMessage} className="w-fit" />
      </form>
    </div>
  );
}
