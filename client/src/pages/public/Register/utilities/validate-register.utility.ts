import {
  ErrorsRegisterLegalPersonalValues,
  ErrorsRegisterPersonalValues,
  ErrorsSwornDeclaration,
  UserActive
} from "@/models";
import {
  validatePersonal,
  validateSwornDeclaration
} from "@/utilities";
import { validateRegisterLegalPersonal } from "@/utilities/register-legal-personal/validate-register-legal-personal.utility";
import { ErrorsRegisterValues, RegisterValues } from "..";

interface Params {
  inputValues: RegisterValues;
  userActive: UserActive;
}

export const validateRegister = ({
  inputValues: { registerPersonal, registerLegalPersonal, swornDeclaration },
  userActive: {
    personal: personalSelected,
    legalPersonal: legalPersonalSelected,
  },
}: Params) => {
  let registerPersonalErrors: Partial<ErrorsRegisterPersonalValues> | undefined;
  let registerLegalPersonalErrors:
    | Partial<ErrorsRegisterLegalPersonalValues>
    | undefined;

  const swornDeclarationError: Partial<ErrorsSwornDeclaration> | undefined =
    validateSwornDeclaration(swornDeclaration);

  if (personalSelected) {
    if (registerPersonal) {
      registerPersonalErrors = validatePersonal(registerPersonal);
    }
  }

  if (legalPersonalSelected) {
    if (registerLegalPersonal) {
      registerLegalPersonalErrors = validateRegisterLegalPersonal(
        registerLegalPersonal
      );
    }
  }

  const errors: Partial<ErrorsRegisterValues | null> = {
    registerPersonal: registerPersonalErrors,
    registerLegalPersonal: registerLegalPersonalErrors,
    swornDeclaration: swornDeclarationError,
  };

  return errors;
};
