import { PersonalValues, LegalPersonalValues, ErrorsPersonalValues, TouchedPersonalValues, TouchedLegalPersonalValues, SwornDeclaration, ErrorsSwornDeclaration, TouchedSwornDeclaration } from "@/models";

export interface RegisterValues {
  personal: PersonalValues;
  legalPersonal: LegalPersonalValues;
  swornDeclaration: SwornDeclaration;
}

export interface ErrorsRegisterValues {
  personal: Partial<ErrorsPersonalValues>;
  legalPersonal: Partial<LegalPersonalValues>;
  swornDeclaration: Partial<ErrorsSwornDeclaration>;
}

export interface TouchedRegisterValues {
  personal: TouchedPersonalValues;
  legalPersonal: TouchedLegalPersonalValues;
  swornDeclaration: TouchedSwornDeclaration;
}
