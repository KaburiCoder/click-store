import AdminOrderList from "@/components/(admin)/orders/admin-order-list";
import SearchBar from "@/components/(admin)/search-bar";
import React from "react";

export default async function AdminOrdersPage() {
  return (
    <div className="flex h-full flex-col">
      <SearchBar />
      <AdminOrderList />
    </div>
  );
}
