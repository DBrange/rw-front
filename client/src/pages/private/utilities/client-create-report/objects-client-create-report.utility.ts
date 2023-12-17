
import { emptyVehicleReportValues, touchedVehicleReportValues, touchedVehicleReportValuesTrue } from "@/utilities/vehicle-report";
import { ClientCreateReportValues, TouchedClientCreateReportValues } from "../..";
import { emptyElectronicValues, touchedElectronicValues, touchedElectronicValuesTrue } from "@/utilities/electronic";
import { emptyGncValues, touchedGncValues, touchedGncValuesTrue } from "@/utilities/gnc";
import { emptyPhoneValues, touchedPhoneValues, touchedPhoneValuesTrue } from "@/utilities/phone";
import { emptyTheftVehiclesValues, touchedTheftVehiclesValues, touchedTheftVehiclesValuesTrue } from '@/utilities/theft-vehicle';
import { emptyTheftElectronicValues, touchedTheftElectronicValues, touchedTheftElectronicValuesTrue } from "@/utilities/theft-electronic";
import { emptyDamageVehiclesValues, touchedDamageVehiclesValues, touchedDamageVehiclesValuesTrue } from "@/utilities/damage-vehicle";
import { emptyDamageElectronicValues, touchedDamageElectronicValues, touchedDamageElectronicValuesTrue } from "@/utilities/damage-electronic";
import { emptyIsTireValues, touchedIsTireValues, touchedIsTireValuesTrue } from "@/utilities/is-tire";
import { emptyFireVehiclesValues, touchedFireVehiclesValues, touchedFireVehiclesValuesTrue } from "@/utilities/fire-vehicle";
import { emptyCrashVehicleValues, touchedCrashVehicleValues, touchedCrashVehicleValuesTrue } from "@/utilities/crash-vehicle";
import { emptyAllThirdPartyInjuredValues, touchedAllThirdPartyInjuredValues, touchedAllThirdPartyInjuredValuesTrue } from "@/utilities/all-third-party-injured";
import { emptyAllCrashVehiclesValues, touchedAllCrashVehiclesValues, touchedAllCrashVehiclesValuesTrue } from "@/utilities/all-crash-vehicles";

export const emptyClientCreateReportValues: ClientCreateReportValues = {
  vehicleReport: emptyVehicleReportValues,
  electronic: emptyElectronicValues,
  gnc: emptyGncValues,
  phone: emptyPhoneValues,
  theftVehicle: emptyTheftVehiclesValues,
  theftElectronic: emptyTheftElectronicValues,
  damageVehicle: emptyDamageVehiclesValues,
  damageElectronic: emptyDamageElectronicValues,
  isTire: emptyIsTireValues,
  fire: emptyFireVehiclesValues,
  crash: emptyCrashVehicleValues,
  thirdPartyInjured: emptyAllThirdPartyInjuredValues,
  thirdPartyVehicle: emptyAllCrashVehiclesValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedClientCreateReportValues: TouchedClientCreateReportValues = {
  vehicleReport: touchedVehicleReportValues,
  electronic: touchedElectronicValues,
  gnc: touchedGncValues,
  phone: touchedPhoneValues,
  theftVehicle: touchedTheftVehiclesValues,
  theftElectronic: touchedTheftElectronicValues,
  damageVehicle: touchedDamageVehiclesValues,
  damageElectronic: touchedDamageElectronicValues,
  isTire: touchedIsTireValues,
  fire: touchedFireVehiclesValues,
  crash: touchedCrashVehicleValues,
  thirdPartyInjured: touchedAllThirdPartyInjuredValues,
  thirdPartyVehicle: touchedAllCrashVehiclesValues,
  swornDeclaration: { swornDeclaration: false },
};

export const touchedClientCreateReportValuesTrue: TouchedClientCreateReportValues = {
  vehicleReport: touchedVehicleReportValuesTrue,
  electronic: touchedElectronicValuesTrue,
  gnc: touchedGncValuesTrue,
  phone: touchedPhoneValuesTrue,
  theftVehicle: touchedTheftVehiclesValuesTrue,
  theftElectronic: touchedTheftElectronicValuesTrue,
  damageVehicle: touchedDamageVehiclesValuesTrue,
  damageElectronic: touchedDamageElectronicValuesTrue,
  isTire: touchedIsTireValuesTrue,
  fire: touchedFireVehiclesValuesTrue,
  crash: touchedCrashVehicleValuesTrue,
  thirdPartyInjured: touchedAllThirdPartyInjuredValuesTrue,
  thirdPartyVehicle: touchedAllCrashVehiclesValuesTrue,
  swornDeclaration: { swornDeclaration: true },
};
