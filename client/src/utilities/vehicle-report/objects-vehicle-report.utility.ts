import { VehicleReportValues, TouchedVehicleReportValues } from "@/models";

export const emptyVehicleReportValues: VehicleReportValues = {
  year: "",
  color: "",
  damage: false,
  damageLocation: "",
  images: [],
  plate: "",
  okm: false,
  gnc: false,
  brand: "",
  model: "",
  fuel: "default",
  type: "default",
};

export const touchedVehicleReportValues: TouchedVehicleReportValues = {
  year: false,
  color: false,
  images: false,
  plate: false,
  brand: false,
  model: false,
  fuel: false,
  type: false,
};

export const touchedVehicleReportValuesTrue: TouchedVehicleReportValues = {
  year: true,
  color: true,
  images: true,
  plate: true,
  brand: true,
  model: true,
  fuel: true,
  type: true,
};
