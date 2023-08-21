import {
  SchemaPersonalType,
  SchemaVehicleType,
  SchemaGncType,
  SchemaElectronicType,
  SchemaPhoneType,
  SchemaLegalPersonalType,
} from "../../../models/types";

export type PersonalVehicleType =
  | (SchemaPersonalType & SchemaVehicleType)
  | (SchemaPersonalType & SchemaVehicleType & SchemaGncType);

export type PersonalElectronicType =
  | (SchemaPersonalType & SchemaElectronicType)
  | (SchemaPersonalType & SchemaElectronicType & SchemaPhoneType);

export type LegalVehicleType =
  | (SchemaLegalPersonalType & SchemaVehicleType)
  | (SchemaLegalPersonalType & SchemaVehicleType & SchemaGncType);

export type LegalElectronicType =
  | (SchemaLegalPersonalType & SchemaElectronicType)
  | (SchemaLegalPersonalType & SchemaElectronicType & SchemaPhoneType);
