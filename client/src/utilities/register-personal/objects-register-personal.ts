import {
  RegisterPersonalValues,
  TouchedRegisterPersonalValues,
} from "@/models/interfaces/register-personal/register-personal-values";
import {
  emptyPersonalValues,
  touchedPersonalValues,
  touchedPersonalValuesTrue,
} from "../personal";

export const emptyRegisterPersonalValues: RegisterPersonalValues = {
  ...emptyPersonalValues,
  password: "",
};

export const touchedRegisterPersonalValues: TouchedRegisterPersonalValues = {
  ...touchedPersonalValues,
  password: false,
};

export const touchedRegisterPersonalValuesTrue: TouchedRegisterPersonalValues =
  {
    ...touchedPersonalValuesTrue,
    password: true,
  };
