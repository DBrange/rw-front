import {
  BrokerLegalPersonalValues,
  BrokerPersonalValues,
  ErrorsBrokerLegalPersonalValues,
  ErrorsBrokerPersonalValues,
  ErrorsRegisterLegalPersonalValues,
  ErrorsRegisterPersonalValues,
  ErrorsSwornDeclaration,
  RegisterLegalPersonalValues,
  RegisterPersonalValues,
  SwornDeclaration,
  TouchedBrokerLegalPersonalValues,
  TouchedBrokerPersonalValues,
  TouchedRegisterLegalPersonalValues,
  TouchedRegisterPersonalValues,
  TouchedSwornDeclaration,
} from "@/models";
import { USER_ROLES } from "@/models/types/users-roles.type";

export interface RegisterValues {
  registerPersonal: RegisterPersonalValues;
  registerLegalPersonal: RegisterLegalPersonalValues;
  registerBrokerPersonal: BrokerPersonalValues;
  registerBrokerLegalPersonal: BrokerLegalPersonalValues;
  swornDeclaration: SwornDeclaration;
}

export interface ErrorsRegisterValues {
  registerPersonal: Partial<ErrorsRegisterPersonalValues>;
  registerLegalPersonal: Partial<ErrorsRegisterLegalPersonalValues>;
  registerBrokerPersonal: Partial<ErrorsBrokerPersonalValues>;
  registerBrokerLegalPersonal: Partial<ErrorsBrokerLegalPersonalValues>;
  swornDeclaration: Partial<ErrorsSwornDeclaration>;
}

export interface TouchedRegisterValues {
  registerPersonal: TouchedRegisterPersonalValues;
  registerLegalPersonal: TouchedRegisterLegalPersonalValues;
  registerBrokerPersonal: TouchedBrokerPersonalValues;
  registerBrokerLegalPersonal: TouchedBrokerLegalPersonalValues;
  swornDeclaration: TouchedSwornDeclaration;
}

export interface RegisterUser {
  userDTO: PersonalValuesToSend | null;
  legalUserDTO: LegalPersonalValuesToSend | null;
  userBrokerDTO: BrokerValuesToSend | null;
}

export interface PersonalValuesToSend extends RegisterPersonalValues{
  role: USER_ROLES
}

export interface LegalPersonalValuesToSend extends RegisterLegalPersonalValues{
  role: USER_ROLES
}

export interface BrokerValuesToSend {
	bussinesName: string,
	enrollment: string,
	card: string
}
