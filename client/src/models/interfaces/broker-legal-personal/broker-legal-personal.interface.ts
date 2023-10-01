import {
  ErrorsRegisterLegalPersonalValues,
  RegisterLegalPersonalValues,
  TouchedRegisterLegalPersonalValues,
} from "..";

export interface BrokerLegalPersonalValues
  extends RegisterLegalPersonalValues {}

export interface ErrorsBrokerLegalPersonalValues
  extends ErrorsRegisterLegalPersonalValues {}

export interface TouchedBrokerLegalPersonalValues
  extends TouchedRegisterLegalPersonalValues {}
