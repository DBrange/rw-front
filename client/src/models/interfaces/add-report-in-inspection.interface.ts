import {
  ThirdPartyVehicleValues,
  IsTireValues,
  TheftElectronicValues,
  FireVehicleValues,
  ThirdPartyInjuredValues,
  CrashVehicleValues,
  AllCrashVehiclesValues,
  TheftVehiclesValues,
} from ".";

export type TheftType =
  | ThirdPartyVehicleValues
  | ThirdPartyVehicleValues
  | (ThirdPartyVehicleValues & IsTireValues)
  | (ThirdPartyVehicleValues & IsTireValues)
  | TheftVehiclesValues
  | TheftElectronicValues;

export type FireType =
  | FireVehicleValues
  | FireVehicleValues
  | (FireVehicleValues & ThirdPartyInjuredValues)
  | (FireVehicleValues & ThirdPartyInjuredValues);

export type CrashType =
  | (CrashVehicleValues & AllCrashVehiclesValues)
  | (CrashVehicleValues & AllCrashVehiclesValues)
  | (CrashVehicleValues & AllCrashVehiclesValues & ThirdPartyInjuredValues)
  | (CrashVehicleValues & AllCrashVehiclesValues & ThirdPartyInjuredValues);
