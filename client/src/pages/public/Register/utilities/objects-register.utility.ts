import { emptyRegisterPersonalValues, touchedRegisterPersonalValues, touchedRegisterPersonalValuesTrue } from "@/utilities/register-personal";
import { RegisterValues, TouchedRegisterValues } from "..";
import { emptyRegisterLegalPersonalValues, touchedRegisterLegalPersonalValues, touchedRegisterLegalPersonalValuesTrue } from "@/utilities/register-legal-personal";
import { emptyBrokerPersonalValues, touchedBrokerPersonalValues, touchedBrokerPersonalValuesTrue } from "@/utilities/broker-personal";
import { emptyBrokerLegalPersonalValues, touchedBrokerLegalPersonalValues, touchedBrokerLegalPersonalValuesTrue } from "@/utilities/broker-legal-personal";

export const emptyRegisterValues: RegisterValues = {
  registerPersonal: emptyRegisterPersonalValues,
  registerLegalPersonal: emptyRegisterLegalPersonalValues,
  registerBrokerPersonal: emptyBrokerPersonalValues,
  registerBrokerLegalPersonal: emptyBrokerLegalPersonalValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedRegisterValues: TouchedRegisterValues = {
  registerPersonal: touchedRegisterPersonalValues,
  registerLegalPersonal: touchedRegisterLegalPersonalValues,
  registerBrokerPersonal: touchedBrokerPersonalValues,
  registerBrokerLegalPersonal: touchedBrokerLegalPersonalValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedRegisterValuesTrue: TouchedRegisterValues = {
  registerPersonal: touchedRegisterPersonalValuesTrue,
  registerLegalPersonal: touchedRegisterLegalPersonalValuesTrue,
  registerBrokerPersonal: touchedBrokerPersonalValuesTrue,
  registerBrokerLegalPersonal: touchedBrokerLegalPersonalValuesTrue,
  swornDeclaration: { swornDeclaration: false },
};
