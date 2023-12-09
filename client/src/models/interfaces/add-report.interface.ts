import {
  VehicleReportValues,
  CrashVehicleValues,
  AllCrashVehiclesValues,
  GncValues,
  ThirdPartyInjuredValues,
  ThirdPartyVehicleValues,
  IsTireValues,
  FireVehicleValues,
  ElectronicValues,
  TheftElectronicValues,
  PhoneValues,
} from ".";

export type VehicleTheftType =
  | (VehicleReportValues & ThirdPartyVehicleValues)
  | (VehicleReportValues & GncValues & ThirdPartyVehicleValues)
  | (VehicleReportValues & ThirdPartyVehicleValues & IsTireValues)
  | (VehicleReportValues & GncValues & ThirdPartyVehicleValues & IsTireValues);

export type VehicleDamageType =
  | (VehicleReportValues & ThirdPartyVehicleValues)
  | (VehicleReportValues & GncValues & ThirdPartyVehicleValues)
  | (VehicleReportValues & ThirdPartyVehicleValues & IsTireValues)
  | (VehicleReportValues & GncValues & ThirdPartyVehicleValues & IsTireValues);

export type ElectronicTheftType =
  | (ElectronicValues & TheftElectronicValues)
  | (ElectronicValues & TheftElectronicValues)
  | (ElectronicValues & PhoneValues & TheftElectronicValues)
  | (ElectronicValues & PhoneValues & TheftElectronicValues);

export type VehicleFireType =
  | (VehicleReportValues & FireVehicleValues)
  | (VehicleReportValues & GncValues & FireVehicleValues)
  | (VehicleReportValues & FireVehicleValues & ThirdPartyInjuredValues)
  | (VehicleReportValues &
      GncValues &
      FireVehicleValues &
      ThirdPartyInjuredValues);

export type VehicleCrashType =
  | (VehicleReportValues & CrashVehicleValues & AllCrashVehiclesValues)
  | (VehicleReportValues &
      GncValues &
      CrashVehicleValues &
      AllCrashVehiclesValues)
  | (VehicleReportValues &
      CrashVehicleValues &
      AllCrashVehiclesValues &
      ThirdPartyInjuredValues)
  | (VehicleReportValues &
      GncValues &
      CrashVehicleValues &
      AllCrashVehiclesValues &
      ThirdPartyInjuredValues);
