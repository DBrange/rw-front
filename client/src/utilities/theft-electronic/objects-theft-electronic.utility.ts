import {
  TheftElectronicValues,
  TouchedTheftElectronicValues,
} from "../../models";

export const emptyTheftElectronicValues: TheftElectronicValues = {
  time: "",
  date: "",
  location: "",
  reportPhoto: [],
  isTire: false,
};

export const touchedTheftElectronicValues: TouchedTheftElectronicValues = {
  time: false,
  date: false,
  location: false,
  reportPhoto: false,
};

export const touchedTheftElectronicValuesTrue: TouchedTheftElectronicValues = {
  time: true,
  date: true,
  location: true,
  reportPhoto: true,
};
