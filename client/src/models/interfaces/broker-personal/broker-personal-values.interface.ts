import {
  ErrorsRegisterPersonalValues,
  RegisterPersonalValues,
  TouchedRegisterPersonalValues,
} from "..";

export interface BrokerPersonalValues extends RegisterPersonalValues {
  enrollment: string;
  bussinesName: string
}

export interface ErrorsBrokerPersonalValues extends ErrorsRegisterPersonalValues {
  enrollment: string;
  bussinesName: string;
}

export interface TouchedBrokerPersonalValues extends TouchedRegisterPersonalValues {
  enrollment: boolean;
  bussinesName: boolean;
}
