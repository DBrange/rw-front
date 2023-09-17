import { TheftVehiclesValues, TouchedTheftVehiclesValues } from "../../models";

export const emptyTheftVehiclesValues: TheftVehiclesValues = {
  time: "",
  date: "",
  location: "",
  reportPhoto: [],
  isTire: false,
};

export const touchedTheftVehiclesValues: TouchedTheftVehiclesValues = {
  time: false,
  date: false,
  location: false,
  reportPhoto: false,
};

export const touchedTheftVehiclesValuesTrue: TouchedTheftVehiclesValues = {
  time: true,
  date: true,
  location: true,
  reportPhoto: true,
};
