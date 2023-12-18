import { DashboardInfo } from "../interfaces/dashboard.interface";

export interface IBrokerUserContext {
  dataToDashboard: DashboardInfo | undefined;
  newData: (date: Date) => boolean | undefined;
  buttonActive: {
    inspection: boolean;
    sinister: boolean;
    client: boolean;
  };
  setButtonActive: React.Dispatch<
    React.SetStateAction<{
      inspection: boolean;
      sinister: boolean;
      client: boolean;
    }>
  >;

  changeBtnActive: (value: string) => void;
}

export const emptyBrokerUserContext: IBrokerUserContext = {
  dataToDashboard: undefined,
  newData: () => false,
  buttonActive: {
    inspection: false,
    sinister: false,
    client: false,
  },
  setButtonActive: () => {},
  changeBtnActive: () => {},
};
