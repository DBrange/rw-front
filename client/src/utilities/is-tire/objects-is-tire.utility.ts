import { IsTireValues, TouchedIsTireValues } from "@/models";


export const emptyIsTireValues: IsTireValues = {
  tireAmount: 0,
  tireWear: 0,
  tirePhoto: [],
  replacementLocation: "",
};

export const touchedIsTireValues: TouchedIsTireValues = {
  tireAmount: false,
  tirePhoto: false,
  replacementLocation: false,
};

export const touchedIsTireValuesTrue: TouchedIsTireValues = {
  tireAmount: false,
  tirePhoto: false,
  replacementLocation: false,
};
