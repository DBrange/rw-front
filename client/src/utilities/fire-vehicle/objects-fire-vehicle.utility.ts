import { FireVehicleValues, TouchedFireVehicleValues } from "../../models";

export const emptyFireVehiclesValues: FireVehicleValues = {
  time: "",
  date: "",
  location: "",
  details: "",
  injured: false,
  injuries: "",
  ambulance: false,
  ambulanceTo: "",
  thirdInjured: false,
  amount: 0
};

export const touchedFireVehiclesValues: TouchedFireVehicleValues = {
  time: false,
  date: false,
  location: false,
  details: false,
  ambulanceTo: false,
  amount: false
};

export const touchedFireVehiclesValuesTrue: TouchedFireVehicleValues = {
  time: true,
  date: true,
  location: true,
  details: true,
  ambulanceTo: true,
  amount: true
};
