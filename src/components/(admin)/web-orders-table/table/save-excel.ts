import { Table } from "@tanstack/react-table";
import { Workbook, Column } from "exceljs";
import dayjs from "dayjs";
import { ExcelWorkbook } from "@/lib/classes/excel-workbook";

interface IHeader {
  index: number;
  columnName: string;
  excelWidth: number;
}
export async function saveExcel<T>(table: Table<T>, fileName: string) {
  const wb = new ExcelWorkbook();
  const ws = wb.addWorksheet("웹결제");
  const ws2 = wb.addWorksheet("후불결제");

  const methodText = "결제방식";
  const headerGroup = table.getHeaderGroups().at(-1);
  const headers = headerGroup!.headers;
  // 결제방식의 칼럼 인덱스를 찾는다.
  const payLaterColumnIndex = headers.findIndex(
    (header) => header.column.columnDef.meta?.columnName === methodText,
  );

  const dispHeaders = headers.reduce((acc: IHeader[], header, index) => {
    const meta = header.column.columnDef.meta;
    const columnName = meta?.columnName;
    // 결제방식은 헤더에서 제외한다.
    if (columnName && columnName !== methodText) {
      const excelWidth = meta.excelWidth ?? 80;
      acc.push({ index, columnName, excelWidth });
    }
    return acc;
  }, []);

  const columns = dispHeaders!.map((header) => ({
    header: header.columnName,
    width: header.excelWidth,
  }));

  // 칼럼 헤더 추가
  ws.columns = columns;
  ws2.columns = columns;

  table.getCoreRowModel().rows.forEach((row) => {
    const cells = row.getVisibleCells();
    const isPayLater = cells.some(
      (cell) =>
        cell.column.getIndex() === payLaterColumnIndex &&
        cell.getValue() === "후불결제",
    );

    const values = cells
      .filter((cell) => {
        const colIndex = cell.column.getIndex();
        return dispHeaders.some((header) => header.index === colIndex);
      })
      .map((cell) => {
        const value = cell.getValue() ?? "";

        if (value instanceof Date) {
          return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
        }
        return value;
      });

    // 후불결제는 ws2 시트에 추가한다.
    if (isPayLater) {
      ws2.addRow(values);
    } else {
      // 그 외 결제들은 ws 시트에 추가한다.
      ws.addRow(values);
    }
  });

  wb.save(fileName);
}
