"use client";
import { useAdminSearchBarStore } from "@/store/admin-search-bar.store";
import React from "react";

export default function AdminOrderList() {
  const { searchData } = useAdminSearchBarStore();

  return <div className="h-full bg-red-200">{JSON.stringify(searchData)}</div>;
}
