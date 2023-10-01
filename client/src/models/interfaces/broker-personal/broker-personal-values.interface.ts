import {
  ErrorsRegisterPersonalValues,
  RegisterPersonalValues,
  TouchedRegisterPersonalValues,
} from "..";

export interface BrokerPersonalValues extends RegisterPersonalValues {
  enrollment: string;
}

export interface ErrorsBrokerPersonalValues
  extends ErrorsRegisterPersonalValues {
  enrollment: string;
}

export interface TouchedBrokerPersonalValues
  extends TouchedRegisterPersonalValues {
  enrollment: boolean;
}
