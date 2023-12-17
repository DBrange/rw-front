import { DashboardInfo } from "../interfaces/dashboard.interface";

export interface IBrokerUserContext {
  dataToDashboard: DashboardInfo | undefined;
  newData: (date: Date) => boolean | undefined;
}

export const emptyBrokerUserContext: IBrokerUserContext = {
  dataToDashboard: undefined,
  newData: () => false,
};
