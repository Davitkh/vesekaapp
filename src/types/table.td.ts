export interface ITable {
  row: Row[];
  colSpan?: number;
  rowSpan?: number;
}
export interface Row {
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}
