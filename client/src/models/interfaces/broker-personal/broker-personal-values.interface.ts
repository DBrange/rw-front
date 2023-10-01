import {
  ErrorsRegisterPersonalValues,
  RegisterPersonalValues,
  TouchedRegisterPersonalValues,
} from "..";

export interface BrokerPersonalValues extends RegisterPersonalValues {}

export interface ErrorsBrokerPersonalValues
  extends ErrorsRegisterPersonalValues {}

export interface TouchedBrokerPersonalValues
  extends TouchedRegisterPersonalValues {}
