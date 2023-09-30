import {
  ErrorsLegalPersonalValues,
  ErrorsPersonalValues,
  ErrorsSwornDeclaration,
  UserActive
} from "@/models";
import {
  validateLegalPersonal,
  validatePersonal,
  validateSwornDeclaration
} from "@/utilities";
import { ErrorsRegisterValues, RegisterValues } from "..";

interface Params {
  inputValues: RegisterValues;
  userActive: UserActive;
}

export const validateRegister = ({
  inputValues: { personal, legalPersonal, swornDeclaration },
  userActive: {
    personal: personalSelected,
    legalPersonal: legalPersonalSelected,
  },
}: Params) => {
  let personalErrors: Partial<ErrorsPersonalValues> | undefined;
  let legalPersonalErrors: Partial<ErrorsLegalPersonalValues> | undefined;

  const swornDeclarationError: Partial<ErrorsSwornDeclaration> | undefined =
    validateSwornDeclaration(swornDeclaration);

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
    swornDeclaration: swornDeclarationError,
  };

  return errors;
};
