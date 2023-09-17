import { VehicleValues, TouchedVehicleValues } from "@/models";

export const emptyVehicleValues: VehicleValues = {
  plate: "",
  year: 0,
  brand: "",
  model: "",
  color: "",
  tireBrand: "",
  tireSize: "",
  tireWear: 0,
  damage: false,
  damageLocation: "",
  images: [],
  okm: false,
  explodedAirbag: false,
  noSpareTire: false,
  gnc: false,
  fuel: "default",
  type: "default",
};

export const touchedVehicleValues: TouchedVehicleValues = {
  plate: false,
  year: false,
  brand: false,
  model: false,
  color: false,
  tireBrand: false,
  tireSize: false,
  tireWear: false,
  images: false,
  fuel: false,
  type: false,
};

export const touchedVehicleValuesTrue: TouchedVehicleValues = {
  plate: true,
  year: true,
  brand: true,
  model: true,
  color: true,
  tireBrand: true,
  tireSize: true,
  tireWear: true,
  images: true,
  fuel: true,
  type: true,
};
