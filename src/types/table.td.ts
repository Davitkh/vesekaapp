export interface ITable {
  row: Row[];
  rowType?: string;
  colSpan?: number;
  rowSpan?: number;
}
export interface Row {
  title: string;
}
