import { GncValues, TouchedGncValues } from "@/models";

export const emptyGncValues: GncValues = {
  oblea: '',
  plate: '',
  expireDate: ''
}

export const touchedGncValues: TouchedGncValues = {
  oblea: false,
  plate: false,
  expireDate: false,
};

export const touchedGncValuesTrue: TouchedGncValues = {
  oblea: true,
  plate: true,
  expireDate: true,
};
