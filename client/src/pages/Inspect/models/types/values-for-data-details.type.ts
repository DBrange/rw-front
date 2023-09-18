import { PersonalValues, LegalPersonalValues, VehicleValues, ElectronicValues } from "@/models";

export type ValuesForFormDetail =
  | PersonalValues
  | LegalPersonalValues
  | VehicleValues
  | ElectronicValues;