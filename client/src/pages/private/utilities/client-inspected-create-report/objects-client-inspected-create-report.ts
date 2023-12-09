import {
  emptyAllCrashVehiclesValues,
  emptyAllThirdPartyInjuredValues,
  emptyCrashVehicleValues,
  emptyDamageElectronicValues,
  emptyDamageVehiclesValues,
  emptyFireVehiclesValues,
  emptyIsTireValues,
  emptyTheftElectronicValues,
  emptyTheftVehiclesValues,
  touchedAllCrashVehiclesValues,
  touchedAllCrashVehiclesValuesTrue,
  touchedAllThirdPartyInjuredValues,
  touchedAllThirdPartyInjuredValuesTrue,
  touchedCrashVehicleValues,
  touchedCrashVehicleValuesTrue,
  touchedDamageElectronicValues,
  touchedDamageElectronicValuesTrue,
  touchedDamageVehiclesValues,
  touchedDamageVehiclesValuesTrue,
  touchedFireVehiclesValues,
  touchedFireVehiclesValuesTrue,
  touchedIsTireValues,
  touchedIsTireValuesTrue,
  touchedTheftElectronicValues,
  touchedTheftElectronicValuesTrue,
  touchedTheftVehiclesValues,
  touchedTheftVehiclesValuesTrue
} from "@/utilities";
import {
  ClientInspectedCreateReportValues,
  TouchedClientInspectedCreateReportValues
} from "../..";

export const emptyClientInspectedCreateReportValues: ClientInspectedCreateReportValues =
  {
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

export const touchedClientInspectedCreateReportValues: TouchedClientInspectedCreateReportValues =
  {
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

export const touchedClientInspectedCreateReportValuesTrue: TouchedClientInspectedCreateReportValues =
  {
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
