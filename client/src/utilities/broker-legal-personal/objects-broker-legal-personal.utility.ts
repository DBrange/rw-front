import { BrokerLegalPersonalValues, TouchedBrokerLegalPersonalValues } from "@/models";
import { emptyLegalPersonalValues, touchedLegalPersonalValues, touchedLegalPersonalValuesTrue } from "../legalPersonal";

export const emptyBrokerLegalPersonalValues: BrokerLegalPersonalValues = {
  ...emptyLegalPersonalValues,
};

export const touchedBrokerLegalPersonalValues: TouchedBrokerLegalPersonalValues = {
  ...touchedLegalPersonalValues,
};

export const touchedBrokerLegalPersonalValuesTrue: TouchedBrokerLegalPersonalValues = {
  ...touchedLegalPersonalValuesTrue,
};
