import { ErrorsRegisterPersonalValues, IUserType, UserActive } from "@/models";
import { ErrorsRegisterValues, RegisterUser, RegisterValues } from "..";
import { USER_ROLES } from "@/models/types/users-roles.type";

interface Params {
  inputValues: RegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
  triggers: any;
  userActive: UserActive;
  brokerActive: UserActive;
  userType: IUserType;
}

export const validationFormDataRegister = ({
  inputValues: {
    registerPersonal,
    registerLegalPersonal,
    registerBrokerPersonal,
    registerBrokerLegalPersonal,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: { trigger },
  userActive,
  brokerActive,
  userType,
}: Params) => {
  if (
    errorsInputValues?.registerPersonal &&
    userType.client &&
    userActive.personal
  ) {
    const dataObj: RegisterUser = {
      userDTO: { ...registerPersonal, role: USER_ROLES.CLIENT },
      legalUserDTO: null,
      userBrokerDTO: null,
    };

    userValidation<ErrorsRegisterPersonalValues, any>(
      errorsInputValues?.registerPersonal,
      trigger(dataObj)
    );
  } else if (
    errorsInputValues?.registerLegalPersonal &&
    userType.client &&
    userActive.legalPersonal
  ) {
    const dataObj: RegisterUser = {
      userDTO: null,
      legalUserDTO: { ...registerLegalPersonal, role: USER_ROLES.CLIENT },
      userBrokerDTO: null,
    };

    userValidation<ErrorsRegisterPersonalValues, any>(
      errorsInputValues?.registerLegalPersonal,
      trigger(dataObj)
    );
  } else if (
    errorsInputValues?.registerBrokerPersonal &&
    userType.broker &&
    brokerActive.personal
  ) {
    const dataObj: RegisterUser = {
      userDTO: { ...registerBrokerPersonal, role: USER_ROLES.BROKER },
      legalUserDTO: null,
      userBrokerDTO: {
        bussinesName: registerBrokerLegalPersonal.bussinesName,
        enrollment: registerBrokerLegalPersonal.enrollment,
        card: "",
      },
    };

    userValidation<ErrorsRegisterPersonalValues, any>(
      errorsInputValues?.registerBrokerPersonal,
      trigger(dataObj)
    );
  } else if (
    errorsInputValues?.registerBrokerLegalPersonal &&
    userType.broker &&
    brokerActive.legalPersonal
  ) {
    const dataObj: RegisterUser = {
      userDTO: null,
      legalUserDTO: { ...registerBrokerLegalPersonal, role: USER_ROLES.BROKER },
      userBrokerDTO: {
        bussinesName: registerBrokerLegalPersonal.bussinesName,
        enrollment: registerBrokerLegalPersonal.enrollment,
        card: "",
      },
    };

    userValidation<ErrorsRegisterPersonalValues, any>(
      errorsInputValues?.registerBrokerLegalPersonal,
      trigger(dataObj)
    );
  }
};

const userValidation = <T, U>(user: Partial<T>, trigger: U): void => {
  const errorsArr = [Object.keys(user)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
  }
};
