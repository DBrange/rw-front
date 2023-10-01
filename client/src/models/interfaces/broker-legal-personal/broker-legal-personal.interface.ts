import {
  ErrorsRegisterLegalPersonalValues,
  RegisterLegalPersonalValues,
  TouchedRegisterLegalPersonalValues,
} from "..";

export interface BrokerLegalPersonalValues extends RegisterLegalPersonalValues {
  enrollment: string;
  businessName: string;
}

export interface ErrorsBrokerLegalPersonalValues
  extends ErrorsRegisterLegalPersonalValues {
  enrollment: string;
  businessName: string;
}

export interface TouchedBrokerLegalPersonalValues
  extends TouchedRegisterLegalPersonalValues {
  enrollment: boolean;
  businessName: boolean;
}
