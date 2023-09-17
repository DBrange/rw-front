import { CrashVehicleValues, TouchedCrashVehicleValues } from "../../models";

export const emptyCrashVehicleValues: CrashVehicleValues = {
  time: "",
  date: "",
  location: "",
  details: "",
  injured: false,
  injuries: "",
  ambulance: false,
  ambulanceTo: "",
  thirdInjured: false,
  amount: 0,
  amountVehicles: 0,
  friendlyStatement: false
};

export const touchedCrashVehicleValues: TouchedCrashVehicleValues = {
  time: false,
  date: false,
  location: false,
  details: false,
  ambulanceTo: false,
  amount: false,
  amountVehicles: false
};

export const touchedCrashVehicleValuesTrue: TouchedCrashVehicleValues = {
  time: true,
  date: true,
  location: true,
  details: true,
  ambulanceTo: true,
  amount: true,
  amountVehicles: true
};