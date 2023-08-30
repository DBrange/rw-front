import { z } from "zod";
import {
  schemaPersonal,
  schemaLegalPersonal,
  schemaVehicle,
  schemaElectronic,
  schemaVehicleCrashReport,
  schemaVehicleReport,
  schemaGnc,
  schemaPhone,
  schemaVehicleCrashReportData,
  schemaElectronicTheftReport,
  schemaIsTire,
  schemaVehicleFireReport,
  schemaVehicleTheftReport,
  schemaThirdInjured,
  schemaThirdPartyVehicleReport,
  schemaThirdInjuredData,
  swornDeclaration,
} from "../../utilities";

export type SchemaLegalPersonalType = z.infer<typeof schemaLegalPersonal>;
export type SchemaElectronicType = z.infer<typeof schemaElectronic>;
export type SchemaPersonalType = z.infer<typeof schemaPersonal>;
export type SchemaVehicleType = z.infer<typeof schemaVehicle>;
export type SchemaPhoneType = z.infer<typeof schemaPhone>;
export type SchemaGncType = z.infer<typeof schemaGnc>;
export type SwornDeclaration = z.infer<typeof swornDeclaration>;

export type AllInspectSchemas =
  | (SchemaPersonalType &
      SchemaLegalPersonalType &
      SchemaVehicleType &
      SchemaElectronicType &
      SchemaGncType &
      SchemaPhoneType &
      SwornDeclaration)
  | AllInspectSchemasOptionals;



export type SchemaElements = SchemaVehicleType | SchemaElectronicType;
export type SchemaUsers = SchemaPersonalType | SchemaLegalPersonalType;

export type AllInspectSchemasOptionals =
  | SchemaPersonalType
  | SchemaVehicleType
  | SchemaLegalPersonalType
  | SchemaElectronicType
  | SchemaGncType
  | SchemaPhoneType
  | SwornDeclaration;

export type SchemaVehicleCrashReportType = z.infer<
  typeof schemaVehicleCrashReport
>;
export type SchemaVehicleTheftReportType = z.infer<
  typeof schemaVehicleTheftReport
>;
export type SchemaVehicleFireReportType = z.infer<
  typeof schemaVehicleFireReport
>;
export type SchemaThirdInjuredDataType = z.infer<typeof schemaThirdInjuredData>;
export type SchemaVehicleReportType = z.infer<typeof schemaVehicleReport>;
export type SchemaThirdInjuredType = z.infer<typeof schemaThirdInjured>;
export type SchemaElectronicTheftReportType = z.infer<
  typeof schemaElectronicTheftReport
>;
export type SchemaVehicleCrashReportDataType = z.infer<
  typeof schemaVehicleCrashReportData
>;
export type SchemaThirdPartyVehicleReportType = z.infer<
  typeof schemaThirdPartyVehicleReport
>;
export type SchemaIsTireType = z.infer<typeof schemaIsTire>;

export type AllReportSchemas =
  | (SchemaPersonalType &
      SchemaLegalPersonalType &
      SchemaVehicleType &
      SchemaElectronicType &
      SchemaGncType &
      SchemaPhoneType &
      SchemaVehicleReportType &
      SchemaVehicleCrashReportType &
      SchemaVehicleTheftReportType &
      SchemaElectronicTheftReportType &
      SchemaVehicleFireReportType &
      SchemaVehicleCrashReportDataType &
      SchemaThirdInjuredType &
      SchemaThirdPartyVehicleReportType &
      SchemaIsTireType &
      SchemaThirdInjuredDataType &
      SwornDeclaration)
  | AllReportOptionals;

export type SchemaComplaint =
  | SchemaVehicleCrashReportType
  | SchemaVehicleTheftReportType
  | SchemaVehicleFireReportType
  | SchemaElectronicTheftReportType
  | SwornDeclaration;

export type AllReportOptionals =
  | SchemaPersonalType
  | SchemaLegalPersonalType
  | SchemaVehicleType
  | SchemaElectronicType
  | SchemaGncType
  | SchemaPhoneType
  | SchemaVehicleReportType
  | SchemaVehicleCrashReportType
  | SchemaVehicleTheftReportType
  | SchemaElectronicTheftReportType
  | SchemaVehicleFireReportType
  | SchemaVehicleCrashReportDataType
  | SchemaThirdInjuredType
  | SchemaThirdPartyVehicleReportType
  | SchemaIsTireType
  | SchemaThirdInjuredDataType
  | SwornDeclaration;
