import { emptyPersonalValues, emptyLegalPersonalValues, emptyVehicleReportValues, emptyElectronicValues, emptyGncValues, emptyPhoneValues, emptyTheftVehiclesValues, emptyIsTireValues, emptyCrashVehicleValues, emptyAllCrashVehiclesValues, emptyFireVehiclesValues, emptyAllThirdPartyInjuredValues, emptyTheftElectronicValues, touchedAllCrashVehiclesValues, touchedAllThirdPartyInjuredValues, touchedElectronicValues, touchedFireVehiclesValues, touchedGncValues, touchedIsTireValues, touchedLegalPersonalValues, touchedPersonalValues, touchedPhoneValues, touchedTheftElectronicValues, touchedTheftVehiclesValues, touchedVehicleReportValues, touchedCrashVehicleValues, touchedAllCrashVehiclesValuesTrue, touchedElectronicValuesTrue, touchedFireVehiclesValuesTrue, touchedGncValuesTrue, touchedIsTireValuesTrue, touchedLegalPersonalValuesTrue, touchedPersonalValuesTrue, touchedPhoneValuesTrue, touchedTheftElectronicValuesTrue, touchedTheftVehiclesValuesTrue, touchedVehicleReportValuesTrue, touchedCrashVehicleValuesTrue, touchedAllThirdPartyInjuredValuesTrue } from "@/utilities";
import { AllReportValues, TouchedAllReportValues } from "../..";

export const emptyAllReportValues: AllReportValues = {
  personal: emptyPersonalValues,
  legalPersonal: emptyLegalPersonalValues,
  vehicleReport: emptyVehicleReportValues,
  electronic: emptyElectronicValues,
  gnc: emptyGncValues,
  phone: emptyPhoneValues,
  theftVehicle: emptyTheftVehiclesValues,
  theftElectronic: emptyTheftElectronicValues,
  isTire: emptyIsTireValues,
  fire: emptyFireVehiclesValues,
  crash: emptyCrashVehicleValues,
  thirdPartyInjured: emptyAllThirdPartyInjuredValues,
  thirdPartyVehicle: emptyAllCrashVehiclesValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedAllReportValues: TouchedAllReportValues = {
  personal: touchedPersonalValues,
  legalPersonal: touchedLegalPersonalValues,
  vehicleReport: touchedVehicleReportValues,
  electronic: touchedElectronicValues,
  gnc: touchedGncValues,
  phone: touchedPhoneValues,
  theftVehicle: touchedTheftVehiclesValues,
  theftElectronic: touchedTheftElectronicValues,
  isTire: touchedIsTireValues,
  fire: touchedFireVehiclesValues,
  crash: touchedCrashVehicleValues,
  thirdPartyInjured: touchedAllThirdPartyInjuredValues,
  thirdPartyVehicle: touchedAllCrashVehiclesValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedAllReportValuesTrue: TouchedAllReportValues = {
  personal: touchedPersonalValuesTrue,
  legalPersonal: touchedLegalPersonalValuesTrue,
  vehicleReport: touchedVehicleReportValuesTrue,
  electronic: touchedElectronicValuesTrue,
  gnc: touchedGncValuesTrue,
  phone: touchedPhoneValuesTrue,
  theftVehicle: touchedTheftVehiclesValuesTrue,
  theftElectronic: touchedTheftElectronicValuesTrue,
  isTire: touchedIsTireValuesTrue,
  fire: touchedFireVehiclesValuesTrue,
  crash: touchedCrashVehicleValuesTrue,
  thirdPartyInjured: touchedAllThirdPartyInjuredValuesTrue,
  thirdPartyVehicle: touchedAllCrashVehiclesValuesTrue,
  swornDeclaration: { swornDeclaration: true },
};