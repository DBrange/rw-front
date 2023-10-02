import {
  emptyAllCrashVehiclesValues,
  emptyAllThirdPartyInjuredValues,
  emptyCrashVehicleValues,
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

export const emptyClientInspectedCreateReportValues: ClientInspectedCreateReportValues = {
  theftVehicle: emptyTheftVehiclesValues,
  theftElectronic: emptyTheftElectronicValues,
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
    isTire: touchedIsTireValuesTrue,
    fire: touchedFireVehiclesValuesTrue,
    crash: touchedCrashVehicleValuesTrue,
    thirdPartyInjured: touchedAllThirdPartyInjuredValuesTrue,
    thirdPartyVehicle: touchedAllCrashVehiclesValuesTrue,
    swornDeclaration: { swornDeclaration: true },
  };
