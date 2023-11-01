import {
  ErrorsRegisterLegalPersonalValues,
  RegisterLegalPersonalValues,
  TouchedRegisterLegalPersonalValues,
} from "..";

export interface BrokerLegalPersonalValues extends RegisterLegalPersonalValues {
  enrollment: string;
  bussinesName: string;
}

export interface ErrorsBrokerLegalPersonalValues
  extends ErrorsRegisterLegalPersonalValues {
  enrollment: string;
  bussinesName: string;
}

export interface TouchedBrokerLegalPersonalValues
  extends TouchedRegisterLegalPersonalValues {
  enrollment: boolean;
  bussinesName: boolean;
}
