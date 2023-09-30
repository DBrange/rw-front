import { PersonalValues, LegalPersonalValues, ErrorsPersonalValues, TouchedPersonalValues, TouchedLegalPersonalValues } from "@/models";

export interface RegisterValues {
  personal: PersonalValues;
  legalPersonal: LegalPersonalValues;
}

export interface ErrorsRegisterValues {
  personal: Partial<ErrorsPersonalValues>;
  legalPersonal: Partial<LegalPersonalValues>;
}

export interface TouchedRegisterValues {
  personal: TouchedPersonalValues;
  legalPersonal: TouchedLegalPersonalValues;
}
