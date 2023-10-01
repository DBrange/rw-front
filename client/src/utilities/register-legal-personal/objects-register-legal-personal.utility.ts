import {
  RegisterLegalPersonalValues,
  TouchedRegisterLegalPersonalValues
} from "@/models";
import { emptyLegalPersonalValues, touchedLegalPersonalValues, touchedLegalPersonalValuesTrue } from "../legalPersonal/objectsLegalPersonal.utility";


export const emptyRegisterLegalPersonalValues: RegisterLegalPersonalValues = {
  ...emptyLegalPersonalValues,
  password: "",
};

export const touchedRegisterLegalPersonalValues: TouchedRegisterLegalPersonalValues =
  {
    ...touchedLegalPersonalValues,
    password: false,
  };

export const touchedRegisterLegalPersonalValuesTrue: TouchedRegisterLegalPersonalValues =
  {
    ...touchedLegalPersonalValuesTrue,
    password: true,
  };
