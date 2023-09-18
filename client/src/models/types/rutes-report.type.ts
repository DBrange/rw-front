import { AllCrashVehiclesValues, CrashVehicleValues, ElectronicValues, FireVehicleValues, GncValues, IsTireValues, LegalPersonalValues, PersonalValues, PhoneValues, TheftElectronicValues, ThirdPartyInjuredValues, ThirdPartyVehicleValues, VehicleReportValues } from "..";

export type PersonalVehicleCrashType =
  | (PersonalValues &
      VehicleReportValues &
      CrashVehicleValues &
      AllCrashVehiclesValues)
  | (PersonalValues &
      VehicleReportValues &
      GncValues &
      CrashVehicleValues &
      AllCrashVehiclesValues)
  | (PersonalValues &
      VehicleReportValues &
      CrashVehicleValues &
      AllCrashVehiclesValues &
      ThirdPartyInjuredValues)
  | (PersonalValues &
      VehicleReportValues &
      GncValues &
      CrashVehicleValues &
      AllCrashVehiclesValues &
      ThirdPartyInjuredValues);

export type PersonalVehicleTheftType =
  | (PersonalValues &
      VehicleReportValues &
      ThirdPartyVehicleValues)
  | (PersonalValues &
      VehicleReportValues &
      GncValues &
      ThirdPartyVehicleValues)
  | (PersonalValues &
      VehicleReportValues &
      ThirdPartyVehicleValues &
      IsTireValues)
  | (PersonalValues &
      VehicleReportValues &
      GncValues &
      ThirdPartyVehicleValues &
      IsTireValues);

export type PersonalVehicleFireType =
  | (PersonalValues & VehicleReportValues & FireVehicleValues)
  | (PersonalValues &
      VehicleReportValues &
      GncValues &
      FireVehicleValues)
  | (PersonalValues &
      VehicleReportValues &
      FireVehicleValues &
      ThirdPartyInjuredValues)
  | (PersonalValues &
      VehicleReportValues &
      GncValues &
      FireVehicleValues &
      ThirdPartyInjuredValues);

export type LegalVehicleCrashType =
  | (LegalPersonalValues &
      VehicleReportValues &
      CrashVehicleValues &
      AllCrashVehiclesValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      GncValues &
      CrashVehicleValues &
      AllCrashVehiclesValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      CrashVehicleValues &
      AllCrashVehiclesValues &
      ThirdPartyInjuredValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      GncValues &
      CrashVehicleValues &
      AllCrashVehiclesValues &
      ThirdPartyInjuredValues);

export type LegalPersonalVehicleTheftType =
  | (LegalPersonalValues &
      VehicleReportValues &
      ThirdPartyVehicleValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      GncValues &
      ThirdPartyVehicleValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      ThirdPartyVehicleValues &
      IsTireValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      GncValues &
      ThirdPartyVehicleValues &
      IsTireValues);

export type LegalPersonalVehicleFireType =
  | (LegalPersonalValues &
      VehicleReportValues &
      FireVehicleValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      GncValues &
      FireVehicleValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      FireVehicleValues &
      ThirdPartyInjuredValues)
  | (LegalPersonalValues &
      VehicleReportValues &
      GncValues &
      FireVehicleValues &
      ThirdPartyInjuredValues);

export type PersonalElectronicTheftType =
  | (PersonalValues &
      ElectronicValues &
      TheftElectronicValues)
  | (PersonalValues &
      ElectronicValues &
      TheftElectronicValues)
  | (PersonalValues &
      ElectronicValues &
      PhoneValues &
      TheftElectronicValues)
  | (PersonalValues &
      ElectronicValues &
      PhoneValues &
      TheftElectronicValues);

export type LegalElectronicTheftType =
  | (LegalPersonalValues &
      ElectronicValues &
      TheftElectronicValues)
  | (LegalPersonalValues &
      ElectronicValues &
      TheftElectronicValues)
  | (LegalPersonalValues &
      ElectronicValues &
      PhoneValues &
      TheftElectronicValues)
  | (LegalPersonalValues &
      ElectronicValues &
      PhoneValues &
      TheftElectronicValues);
