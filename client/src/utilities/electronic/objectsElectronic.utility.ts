import { ElectronicValues, TouchedElectronicValues } from "@/models";

export const emptyElectronicValues: ElectronicValues = {
  type: "default",
  brand: "",
  model: "",
};

export const touchedElectronicValues: TouchedElectronicValues = {
  type: false,
  brand: false,
  model: false,
};

export const touchedElectronicValuesTrue: TouchedElectronicValues = {
  type: true,
  brand: true,
  model: true,
};
