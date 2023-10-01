import {
  ErrorsRegisterLegalPersonalValues,
  ErrorsRegisterPersonalValues,
  ErrorsSwornDeclaration,
  RegisterLegalPersonalValues,
  RegisterPersonalValues,
  SwornDeclaration,
  TouchedRegisterLegalPersonalValues,
  TouchedRegisterPersonalValues,
  TouchedSwornDeclaration,
} from "@/models";

export interface RegisterValues {
  registerPersonal: RegisterPersonalValues;
  registerLegalPersonal: RegisterLegalPersonalValues;
  swornDeclaration: SwornDeclaration;
}

export interface ErrorsRegisterValues {
  registerPersonal: Partial<ErrorsRegisterPersonalValues>;
  registerLegalPersonal: Partial<ErrorsRegisterLegalPersonalValues>;
  swornDeclaration: Partial<ErrorsSwornDeclaration>;
}

export interface TouchedRegisterValues {
  registerPersonal: TouchedRegisterPersonalValues;
  registerLegalPersonal: TouchedRegisterLegalPersonalValues;
  swornDeclaration: TouchedSwornDeclaration;
}
