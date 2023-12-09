import { DamageElectronicValues, TouchedDamageElectronicValues } from "../../models";

export const emptyDamageElectronicValues: DamageElectronicValues = {
  time: "",
  date: "",
  location: "",
  reportPhoto: [],
  details: "",
  budget: "",
};

export const touchedDamageElectronicValues: TouchedDamageElectronicValues = {
  time: false,
  date: false,
  location: false,
  reportPhoto: false,
  details: false,
  budget: false,
};

export const touchedDamageElectronicValuesTrue: TouchedDamageElectronicValues = {
  time: true,
  date: true,
  location: true,
  reportPhoto: true,
  details: true,
  budget: true,
};
