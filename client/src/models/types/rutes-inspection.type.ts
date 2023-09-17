import { ElectronicValues, GncValues, LegalPersonalValues, PersonalValues, PhoneValues, VehicleValues } from "..";

export type PersonalVehicleType =
  | (PersonalValues & VehicleValues)
  | (PersonalValues & VehicleValues & GncValues);

export type PersonalElectronicType =
  | (PersonalValues & ElectronicValues)
  | (PersonalValues & ElectronicValues & PhoneValues);

export type LegalVehicleType =
  | (LegalPersonalValues & VehicleValues)
  | (LegalPersonalValues & VehicleValues & GncValues);

export type LegalElectronicType =
  | (LegalPersonalValues & ElectronicValues)
  | (LegalPersonalValues & ElectronicValues & PhoneValues);