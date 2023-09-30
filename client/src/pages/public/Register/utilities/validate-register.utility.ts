import {
  ErrorsLegalPersonalValues,
  ErrorsPersonalValues,
  UserActive
} from "@/models";
import {
  validateLegalPersonal,
  validatePersonal
} from "@/utilities";
import { ErrorsRegisterValues, RegisterValues } from "..";

interface Params {
  inputValues: RegisterValues;
  userActive: UserActive;
}

export const validateRegister = ({
  inputValues: {
    personal,
    legalPersonal,
  },
  userActive: {
    personal: personalSelected,
    legalPersonal: legalPersonalSelected,
  },
}: Params) => {
  let personalErrors: Partial<ErrorsPersonalValues> | undefined;
  let legalPersonalErrors: Partial<ErrorsLegalPersonalValues> | undefined;


  if (personalSelected) {
    if (personal) {
      personalErrors = validatePersonal(personal);
    }
  }

  if (legalPersonalSelected) {
    if (legalPersonal) {
      legalPersonalErrors = validateLegalPersonal(legalPersonal);
    }
  }

  
  

  const errors: Partial<ErrorsRegisterValues | null> = {
    personal: personalErrors,
    legalPersonal: legalPersonalErrors,
  };

  return errors;
};
