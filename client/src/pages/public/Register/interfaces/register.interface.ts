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
