import "@tanstack/react-table"; //or vue, svelte, solid, etc.

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: "left" | "center" | "right" | "justify" | "char" | undefined;
    columnName?: string | undefined;
    excelWidth?: number;
  }
}
