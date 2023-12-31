export interface InfoLineGraph{
  label: string,
  months: number[]
  weeks: number[]
}

export interface InfoGraphQuantity {
  label: string;
  numbers: number[];
}

export enum GraphTypeEnum {
  LINE = 'LINE',
  BAR = 'BAR',
  CIRCULAR = 'CIRCULAR',
}
export enum GraphFormatEnum {
  MONTHS = 'MONTHS',
  WEEKS = 'WEEKS',
}

export interface GraphType {
  income: GraphTypeEnum;
  newUser: GraphTypeEnum;
  userType: GraphTypeEnum;
  brokerLevel: GraphTypeEnum;
  documents: GraphTypeEnum;
  usersQuantity: GraphTypeEnum;
  actualUsers: GraphTypeEnum;
}


export interface GraphFormat {
  income: GraphFormatEnum;
  newUser: GraphFormatEnum;
  userType: GraphFormatEnum;
  brokerLevel: GraphFormatEnum;
  documents: GraphFormatEnum;
  usersQuantity: GraphFormatEnum;
  actualUsers: GraphFormatEnum;
}