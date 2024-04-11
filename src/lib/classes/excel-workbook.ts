import { Workbook } from "exceljs";

export class ExcelWorkbook extends Workbook {
  async save(fileName: string) {
    const buffer = await this.xlsx.writeBuffer();

    let blob = new Blob([buffer]);
    let url = URL.createObjectURL(blob);
    let elem = document.createElement("a");
    elem.href = url;
    elem.download = `${fileName}.xlsx`;
    elem.click();
    URL.revokeObjectURL(url);
    elem.remove();
  }
}
