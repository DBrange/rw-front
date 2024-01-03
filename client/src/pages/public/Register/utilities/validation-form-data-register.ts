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
    const dataObj = {
      userDTO: {
        phoneNumber: registerPersonal.phoneNumber,
        email: registerPersonal.email,
        altEmail: registerPersonal.altEmail,
        password: registerPersonal.password,
        address: registerPersonal.address,
      },
      personalUseDTO: {
        name: registerPersonal.name,
        lastName: registerPersonal.lastName,
        birthDate: registerPersonal.birthDate,
        gender: registerPersonal.gender,
        dni: registerPersonal.dni,
      },
      legalUserDTO: null,
      userBrokerDTO: null,
    };
    console.log(dataObj);
    userValidation<ErrorsRegisterPersonalValues, any>(
      errorsInputValues?.registerPersonal,
      trigger(dataObj)
    );
  } else if (
    errorsInputValues?.registerLegalPersonal &&
    userType.client &&
    userActive.legalPersonal
  ) {
    const dataObj = {
      userDTO: {
        phoneNumber: registerLegalPersonal.phoneNumber,
        email: registerLegalPersonal.email,
        altEmail: registerLegalPersonal.altEmail,
        password: registerLegalPersonal.password,
        address: registerLegalPersonal.address,
      },
      legalUserDTO: {
        companyName: registerLegalPersonal.companyName,
        cuit: registerLegalPersonal.cuit,
      },
      userBrokerDTO: null,
    };
    console.log(dataObj);
    userValidation<ErrorsRegisterPersonalValues, any>(
      errorsInputValues?.registerLegalPersonal,
      trigger(dataObj)
    );
  } else if (
    errorsInputValues?.registerBrokerPersonal &&
    userType.broker &&
    brokerActive.personal
  ) {
    const dataObj = {
      userDTO: {
        phoneNumber: registerPersonal.phoneNumber,
        email: registerPersonal.email,
        altEmail: registerPersonal.altEmail,
        password: registerPersonal.password,
        address: registerPersonal.address,
      },
      personalUseDTO: {
        name: registerPersonal.name,
        lastName: registerPersonal.lastName,
        birthDate: registerPersonal.birthDate,
        gender: registerPersonal.gender,
        dni: registerPersonal.dni,
      },
      legalUserDTO: null,
      userBrokerDTO: {
        bussinesName: registerBrokerLegalPersonal.bussinesName,
        enrollment: registerBrokerLegalPersonal.enrollment,
        card: "",
      },
    };
    console.log(dataObj);
    userValidation<ErrorsRegisterPersonalValues, any>(
      errorsInputValues?.registerBrokerPersonal,
      trigger(dataObj)
    );
  } else if (
    errorsInputValues?.registerBrokerLegalPersonal &&
    userType.broker &&
    brokerActive.legalPersonal
  ) {
    const dataObj = {
      userDTO: {
        phoneNumber: registerLegalPersonal.phoneNumber,
        email: registerLegalPersonal.email,
        altEmail: registerLegalPersonal.altEmail,
        password: registerLegalPersonal.password,
        address: registerLegalPersonal.address,
      },
      legalUserDTO: {
        companyName: registerLegalPersonal.companyName,
        cuit: registerLegalPersonal.cuit,
      },
      userBrokerDTO: {
        bussinesName: registerBrokerLegalPersonal.bussinesName,
        enrollment: registerBrokerLegalPersonal.enrollment,
        card: "",
      },
    };
    console.log(dataObj);
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
