import { BrokerLegalPersonalValues, TouchedBrokerLegalPersonalValues } from "@/models";
import { emptyRegisterLegalPersonalValues, touchedRegisterLegalPersonalValues, touchedRegisterLegalPersonalValuesTrue } from "../register-legal-personal/objects-register-legal-personal.utility";

export const emptyBrokerLegalPersonalValues: BrokerLegalPersonalValues = {
  ...emptyRegisterLegalPersonalValues,
    enrollment: '',
  businessName: ''
};

export const touchedBrokerLegalPersonalValues: TouchedBrokerLegalPersonalValues = {
  ...touchedRegisterLegalPersonalValues,
  enrollment: false,
  businessName: false
};

export const touchedBrokerLegalPersonalValuesTrue: TouchedBrokerLegalPersonalValues = {
  ...touchedRegisterLegalPersonalValuesTrue,
  enrollment: true,
  businessName: true
};
