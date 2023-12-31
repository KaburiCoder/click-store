import AdminWebOrderList from "@/components/(admin)/web-orders/admin-web-order-list";
import SearchBar from "@/components/(admin)/search-bar";
import React from "react";

export default function AdminWebOrdersPage() {
  return (
    <div className="flex h-full flex-col">
      <SearchBar />
      <AdminWebOrderList />
    </div>
  );
}
