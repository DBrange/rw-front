import { createContext, useContext, useState } from "react";
import {
  emptyAdminUserContext,
  IAdminUserContext,
} from "./empty-adminUser-context";
import useSWR from "swr";
import { AccesLevelNumber, AdminDashBoardDocumentsUrl, AdminDashBoardLevelUrl, AdminDashBoardNewUsersUrl, AdminDashBoardRoleUrl, AdminDashBoardServicesUrl, AdminDashBoardUserIncomeUrl, AdminDashBoardUserQuantityUrl, GraphFormat, GraphFormatEnum, GraphType, GraphTypeEnum, InfoLineGraph, adminDashBoardDocuments, adminDashBoardLevel, adminDashBoardNewUsers, adminDashBoardRole, adminDashBoardServices, adminDashBoardUserIncome, adminDashBoardUserQuantity } from "..";
import { ClickEventType } from "@/pages";
import { months } from '../utilities/labels.utility';

export const AdminUserContext = createContext<IAdminUserContext>(
  emptyAdminUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const AdminUserProvider = ({ children }: ChildrenType) => {

  const [graphType, setGraphType] = useState<GraphType>({
    newUser: GraphTypeEnum.LINE,
    userType: GraphTypeEnum.LINE,
    brokerLevel: GraphTypeEnum.LINE,
    documents: GraphTypeEnum.LINE,
    income: GraphTypeEnum.LINE,
    usersQuantity: GraphTypeEnum.CIRCULAR,
    actualUsers: GraphTypeEnum.CIRCULAR,
  });

  const [graphFormatType, setGraphFormatType] = useState<GraphFormat>({
    newUser: GraphFormatEnum.MONTHS,
    userType: GraphFormatEnum.MONTHS,
    brokerLevel: GraphFormatEnum.MONTHS,
    documents: GraphFormatEnum.MONTHS,
    income: GraphFormatEnum.MONTHS,
    usersQuantity: GraphFormatEnum.MONTHS,
    actualUsers: GraphFormatEnum.MONTHS,
  });

  const changeGraphType = (e: ClickEventType) => {
    const { name, value } = e.currentTarget;

    if (value === GraphTypeEnum.LINE) {
      setGraphType({
        ...graphType,
        [name]: value,
      });
    } else if (value === GraphTypeEnum.BAR) {
      setGraphType({
        ...graphType,
        [name]: value,
      });
    } else if (value === GraphTypeEnum.CIRCULAR) {
      setGraphType({
        ...graphType,
        [name]: value,
      });
    }
  };

  const changeGraphFormatType = (e: ClickEventType) => {
    const { name, value } = e.currentTarget;

    if (value === GraphFormatEnum.MONTHS) {
      setGraphFormatType({
        ...graphFormatType,
        [name]: value,
      });
    } else if (value === GraphFormatEnum.WEEKS) {
      setGraphFormatType({
        ...graphFormatType,
        [name]: value,
      });
    }
  };

  const { data: incomeData } = useSWR(
    AdminDashBoardUserIncomeUrl(),
    adminDashBoardUserIncome
  );

  const { data: newUserData } = useSWR(
    AdminDashBoardNewUsersUrl(),
    adminDashBoardNewUsers
  );

  const { data: roleData } = useSWR(
    AdminDashBoardRoleUrl(),
    adminDashBoardRole
  );

  const { data: levelData } = useSWR(
    AdminDashBoardLevelUrl(),
    adminDashBoardLevel
  );

  const { data: servicesData } = useSWR(
    AdminDashBoardServicesUrl(),
    adminDashBoardServices
  );

  const { data: userQuantityData } = useSWR(
    AdminDashBoardUserQuantityUrl(),
    adminDashBoardUserQuantity
  );

  const { data: documentsData } = useSWR(
    AdminDashBoardDocumentsUrl(),
    adminDashBoardDocuments
  );
  console.log(levelData,'-----');

  const levellData = (
    levelData: any
  ): Array<{
    label: string;
    months: number[];
    weeks: number[];
  }> => {
    const arr: Array<{
      label: string;
      months: number[];
      weeks: number[];
    }> = [];

    // Definir el mapeo de claves numéricas a etiquetas
    const keyMapping: { [key: number]: string } = {
      0: "Free",
      10: "Basic",
      20: "Premium",
      30: "Pro",
      // Agrega más mapeos si es necesario
    };

    // Iterar sobre las claves del objeto original
    for (const key in levelData) {
      const label = keyMapping[key as any]; // Necesitas el as any aquí debido al tipo de las claves
      const months = levelData[key].months;
      const weeks = levelData[key].weeks;

      // Agregar el objeto al nuevo array
      arr.push({ label, months, weeks });
    }

    return arr;
  };

  const values = {
    incomeData,
    newUserData,
    roleData,
    levelData,
    levellData,
    servicesData,
    userQuantityData,
    documentsData,
    graphType,
    graphFormatType,
    changeGraphType,
    changeGraphFormatType,
  };

  return (
    <AdminUserContext.Provider value={values}>
      {children}
    </AdminUserContext.Provider>
  );
};

export const useAdminUserContext = () => {
  const context = useContext(AdminUserContext);
  if (!context) {
    throw new Error(
      "useClientContext can only be used inside AdminUserProvider"
    );
  }

  return context;
};
