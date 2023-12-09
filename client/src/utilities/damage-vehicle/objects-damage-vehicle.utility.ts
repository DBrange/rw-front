import { DamageVehiclesValues, TouchedDamageVehiclesValues } from "@/models";

export const emptyDamageVehiclesValues: DamageVehiclesValues = {
  time: "",
  date: "",
  location: "",
  reportPhoto: [],
  details: '',
  budget: '',
}

export const touchedDamageVehiclesValues: TouchedDamageVehiclesValues = {
  time: false,
  date: false,
  location: false,
  reportPhoto: false,
  details: false,
  budget: false,
};

export const touchedDamageVehiclesValuesTrue: TouchedDamageVehiclesValues = {
  time: true,
  date: true,
  location: true,
  reportPhoto: true,
  details: true,
  budget: true,
};
