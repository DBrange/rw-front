import { ClickEventType } from "@/pages";
import { GraphFormat, GraphFormatEnum, GraphType, GraphTypeEnum, InfoGraphQuantity, InfoLineGraph } from "../interfaces/LineGraph.interface";


export interface IAdminUserContext {
  incomeData?: InfoLineGraph[];
  newUserData?: InfoLineGraph[];
  roleData?: InfoLineGraph[];
  levellData?: any;
  levelData?: InfoLineGraph[] | undefined;
  servicesData?: InfoGraphQuantity[];
  userQuantityData?: InfoGraphQuantity[];
  documentsData?: InfoLineGraph[];
  graphType: GraphType;
  graphFormatType: GraphFormat;
  changeGraphType: (e: ClickEventType) => void;
  changeGraphFormatType: (e: ClickEventType) => void;
}

export const emptyAdminUserContext: IAdminUserContext = {
  incomeData: [],
  newUserData: [],
  roleData: [],
  levellData: [],
  levelData: [],
  servicesData: [],
  userQuantityData: [],
  documentsData: [],
  graphType: {
    newUser: GraphTypeEnum.LINE,
    userType: GraphTypeEnum.LINE,
    brokerLevel: GraphTypeEnum.LINE,
    documents: GraphTypeEnum.LINE,
    income: GraphTypeEnum.LINE,
    usersQuantity: GraphTypeEnum.CIRCULAR,
    actualUsers: GraphTypeEnum.CIRCULAR,
  },
  graphFormatType: {
    newUser: GraphFormatEnum.MONTHS,
    userType: GraphFormatEnum.MONTHS,
    brokerLevel: GraphFormatEnum.MONTHS,
    documents: GraphFormatEnum.MONTHS,
    income: GraphFormatEnum.MONTHS,
    usersQuantity: GraphFormatEnum.MONTHS,
    actualUsers: GraphFormatEnum.MONTHS,
  },
  changeGraphType: () => {},
  changeGraphFormatType: () => {},
};
