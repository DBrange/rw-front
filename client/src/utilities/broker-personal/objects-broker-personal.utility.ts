import { BrokerPersonalValues, TouchedBrokerPersonalValues } from "@/models";
import { emptyRegisterPersonalValues, touchedRegisterPersonalValues, touchedRegisterPersonalValuesTrue } from "../register-personal/objects-register-personal";

export const emptyBrokerPersonalValues: BrokerPersonalValues = {
  ...emptyRegisterPersonalValues,
  enrollment: ''
};

export const touchedBrokerPersonalValues: TouchedBrokerPersonalValues = {
  ...touchedRegisterPersonalValues,
  enrollment: false
};

export const touchedBrokerPersonalValuesTrue: TouchedBrokerPersonalValues = {
  ...touchedRegisterPersonalValuesTrue,
  enrollment: true
};
