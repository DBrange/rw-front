import { AllInspectValues, TouchedAllInspectValues } from "../..";
import {
  emptyPersonalValues,
  touchedPersonalValues,
  touchedPersonalValuesTrue,
} from "@/utilities/personal";
import {
  emptyLegalPersonalValues,
  touchedLegalPersonalValues,
  touchedLegalPersonalValuesTrue,
} from "@/utilities/legalPersonal";


import {
  emptyGncValues,
  touchedGncValues,
  touchedGncValuesTrue,
} from "@/utilities/gnc";
import {
  emptyPhoneValues,
  touchedPhoneValues,
  touchedPhoneValuesTrue,
} from "@/utilities/phone";
import { emptyElectronicValues, touchedElectronicValues, touchedElectronicValuesTrue } from "@/utilities/electronic";
import {
  emptyVehicleValues,
  touchedVehicleValues,
  touchedVehicleValuesTrue,
} from "@/utilities/vehicle";

export const emptyAllInspectValues: AllInspectValues = {
  personal: emptyPersonalValues,
  legalPersonal: emptyLegalPersonalValues,
  vehicle: emptyVehicleValues,
  electronic: emptyElectronicValues,
  gnc: emptyGncValues,
  phone: emptyPhoneValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedAllInspectValues: TouchedAllInspectValues = {
  personal: touchedPersonalValues,
  legalPersonal: touchedLegalPersonalValues,
  vehicle: touchedVehicleValues,
  electronic: touchedElectronicValues,
  gnc: touchedGncValues,
  phone: touchedPhoneValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedAllInspectValuesTrue: TouchedAllInspectValues = {
  personal: touchedPersonalValuesTrue,
  legalPersonal: touchedLegalPersonalValuesTrue,
  vehicle: touchedVehicleValuesTrue,
  electronic: touchedElectronicValuesTrue,
  gnc: touchedGncValuesTrue,
  phone: touchedPhoneValuesTrue,
  swornDeclaration: { swornDeclaration: true },
};
