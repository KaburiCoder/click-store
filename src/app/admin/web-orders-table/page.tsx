import SearchBar from "@/components/(admin)/search-bar";
import React from "react";
import AdminWebOrderTable from "@/components/(admin)/web-orders-table/admin_web_order_table";
import ButtonL from "@/components/ui/custom/button-l";

export default function AdminWebOrdersPage() {
  return (
    <div className="flex flex-col">
      <AdminWebOrderTable />
    </div>
  );
}
