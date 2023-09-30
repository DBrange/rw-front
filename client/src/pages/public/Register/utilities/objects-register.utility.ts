import { emptyPersonalValues, emptyLegalPersonalValues, touchedPersonalValues, touchedLegalPersonalValues, touchedPersonalValuesTrue, touchedLegalPersonalValuesTrue } from "@/utilities";
import { RegisterValues, TouchedRegisterValues } from "..";

export const emptyRegisterValues: RegisterValues = {
  personal: emptyPersonalValues,
  legalPersonal: emptyLegalPersonalValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedRegisterValues: TouchedRegisterValues = {
  personal: touchedPersonalValues,
  legalPersonal: touchedLegalPersonalValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedRegisterValuesTrue: TouchedRegisterValues = {
  personal: touchedPersonalValuesTrue,
  legalPersonal: touchedLegalPersonalValuesTrue,
  swornDeclaration: { swornDeclaration: false },
};
