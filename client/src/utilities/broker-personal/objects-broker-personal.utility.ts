import { BrokerPersonalValues, TouchedBrokerPersonalValues } from "@/models";
import { emptyPersonalValues, touchedPersonalValues, touchedPersonalValuesTrue } from "../personal";

export const emptyBrokerPersonalValues: BrokerPersonalValues = {
  ...emptyPersonalValues,
};

export const touchedBrokerPersonalValues: TouchedBrokerPersonalValues = {
  ...touchedPersonalValues,
};

export const touchedBrokerPersonalValuesTrue: TouchedBrokerPersonalValues = {
  ...touchedPersonalValuesTrue,
};
