import {
  BrokerLegalPersonalValues,
  TouchedBrokerLegalPersonalValues,
} from "@/models";
import {
  emptyRegisterLegalPersonalValues,
  touchedRegisterLegalPersonalValues,
  touchedRegisterLegalPersonalValuesTrue,
} from "../register-legal-personal/objects-register-legal-personal.utility";

export const emptyBrokerLegalPersonalValues: BrokerLegalPersonalValues = {
  ...emptyRegisterLegalPersonalValues,
  enrollment: "",
  bussinesName: "",
};

export const touchedBrokerLegalPersonalValues: TouchedBrokerLegalPersonalValues =
  {
    ...touchedRegisterLegalPersonalValues,
    enrollment: false,
    bussinesName: false,
  };

export const touchedBrokerLegalPersonalValuesTrue: TouchedBrokerLegalPersonalValues =
  {
    ...touchedRegisterLegalPersonalValuesTrue,
    enrollment: true,
    bussinesName: true,
  };
