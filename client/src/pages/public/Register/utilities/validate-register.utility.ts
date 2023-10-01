import {
  ErrorsBrokerLegalPersonalValues,
  ErrorsBrokerPersonalValues,
  ErrorsRegisterLegalPersonalValues,
  ErrorsRegisterPersonalValues,
  ErrorsSwornDeclaration,
  UserActive,
} from "@/models";
import {
  validateBrokerLegalPersonal,
  validateBrokerPersonal,
  validateRegisterPersonal,
  validateSwornDeclaration,
} from "@/utilities";
import { validateRegisterLegalPersonal } from "@/utilities/register-legal-personal/validate-register-legal-personal.utility";
import { ErrorsRegisterValues, RegisterValues } from "..";

interface Params {
  inputValues: RegisterValues;
  userActive: UserActive;
  brokerActive: UserActive;
}

export const validateRegister = ({
  inputValues: {
    registerPersonal,
    registerLegalPersonal,
    registerBrokerPersonal,
    registerBrokerLegalPersonal,
    swornDeclaration,
  },
  userActive: {
    personal: personalSelected,
    legalPersonal: legalPersonalSelected,
  },
  brokerActive: {
    personal: brokerPersonalSelected,
    legalPersonal: brokerLegalPersonalSelected,
  },
}: Params) => {
  let registerPersonalErrors: Partial<ErrorsRegisterPersonalValues> | undefined;
  let registerLegalPersonalErrors:
    | Partial<ErrorsRegisterLegalPersonalValues>
    | undefined;
  let registerBrokerPersonalErrors:
    | Partial<ErrorsBrokerPersonalValues>
    | undefined;
  let registerBrokerLegalPersonalErrors:
    | Partial<ErrorsBrokerLegalPersonalValues>
    | undefined;

  const swornDeclarationError: Partial<ErrorsSwornDeclaration> | undefined =
    validateSwornDeclaration(swornDeclaration);

  if (personalSelected) {
    if (registerPersonal) {
      registerPersonalErrors = validateRegisterPersonal(registerPersonal);
    }
  }

  if (legalPersonalSelected) {
    if (registerLegalPersonal) {
      registerLegalPersonalErrors = validateRegisterLegalPersonal(
        registerLegalPersonal
      );
    }
  }

  if (brokerPersonalSelected) {
    if (registerBrokerPersonal) {
      registerBrokerPersonalErrors = validateBrokerPersonal(
        registerBrokerPersonal
      );
    }
  }

  if (brokerLegalPersonalSelected) {
    if (registerBrokerLegalPersonal) {
      registerBrokerLegalPersonalErrors = validateBrokerLegalPersonal(
        registerBrokerLegalPersonal
      );
    }
  }

  const errors: Partial<ErrorsRegisterValues | null> = {
    registerPersonal: registerPersonalErrors,
    registerLegalPersonal: registerLegalPersonalErrors,
    registerBrokerPersonal: registerBrokerPersonalErrors,
    registerBrokerLegalPersonal: registerBrokerLegalPersonalErrors,
    swornDeclaration: swornDeclarationError,
  };

  return errors;
};
