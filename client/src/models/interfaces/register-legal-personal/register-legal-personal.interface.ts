import {
  LegalPersonalValues,
  ErrorsLegalPersonalValues,
  TouchedLegalPersonalValues,
} from "..";

export interface RegisterLegalPersonalValues extends LegalPersonalValues {
  password: string;
}

export interface ErrorsRegisterLegalPersonalValues
  extends ErrorsLegalPersonalValues {
  password: string;
}

export interface TouchedRegisterLegalPersonalValues
  extends TouchedLegalPersonalValues {
  password: boolean;
}
