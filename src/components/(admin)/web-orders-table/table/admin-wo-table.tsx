import {
  Table,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Payment } from "@/db/models/payment";
import React, { useImperativeHandle } from "react";
import { adminWOColumns } from "./admin-wo-columns";
import styles from "./admin-wo-table.module.scss";

interface Props {
  payments: Payment[];
}

export interface AdminWOTableRef {
  getTable: () => Table<any>;
}

export const AdminWOTable = React.forwardRef<AdminWOTableRef, Props>(
  ({ payments }: Props, ref) => {
    const table = useReactTable({
      data: payments,
      columns: adminWOColumns,
      getCoreRowModel: getCoreRowModel(),
    });

    useImperativeHandle(ref, () => ({
      getTable: () => table,
    }));

    return (
      <div className="p-2">
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} align={cell.column.columnDef.meta?.align}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
      </div>
    );
  },
);

AdminWOTable.displayName = "AdminWOTable";
