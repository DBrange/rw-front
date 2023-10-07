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
import {
  emptyElectronicValues,
  touchedElectronicValues,
  touchedElectronicValuesTrue,
} from "@/utilities/electronic";
import {
  emptyVehicleValues,
  touchedVehicleValues,
  touchedVehicleValuesTrue,
} from "@/utilities/vehicle";
import { ClientCreateInspectionValues, TouchedClientCreateInspectionValues } from "../..";

export const emptyClientCreateInspectionValues: ClientCreateInspectionValues = {
  vehicle: emptyVehicleValues,
  electronic: emptyElectronicValues,
  gnc: emptyGncValues,
  phone: emptyPhoneValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedTouchedClientCreateInspectionValues: TouchedClientCreateInspectionValues = {
  vehicle: touchedVehicleValues,
  electronic: touchedElectronicValues,
  gnc: touchedGncValues,
  phone: touchedPhoneValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedTouchedClientCreateInspectionValuesTrue: TouchedClientCreateInspectionValues = {
  vehicle: touchedVehicleValuesTrue,
  electronic: touchedElectronicValuesTrue,
  gnc: touchedGncValuesTrue,
  phone: touchedPhoneValuesTrue,
  swornDeclaration: { swornDeclaration: true },
};
