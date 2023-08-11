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
  schemaVehicleCrashReportDataNotOwner,
} from "../../utilities";

export type SchemaPersonalType = z.infer<typeof schemaPersonal>;
export type SchemaLegalPersonalType = z.infer<typeof schemaLegalPersonal>;
export type SchemaVehicleType = z.infer<typeof schemaVehicle>;
export type SchemaElectronicType = z.infer<typeof schemaElectronic>;
export type SchemaGnc = z.infer<typeof schemaGnc>;
export type SchemaPhone = z.infer<typeof schemaPhone>;

export type AllInspectSchemas =
  | (SchemaPersonalType &
      SchemaLegalPersonalType &
      SchemaVehicleType &
      SchemaElectronicType &
      SchemaGnc &
      SchemaPhone)
  | AllInspectSchemesCombines
  | AllInspectSchemasOptionals
  | SchemaVehicleType;
  
  export type AllInspectSchemesCombines =
  | (SchemaPersonalType & SchemaVehicleType)
  | (SchemaPersonalType & SchemaElectronicType)
  | (SchemaLegalPersonalType & SchemaVehicleType)
  | (SchemaLegalPersonalType & SchemaElectronicType);
  
  export type SchemaElements = SchemaVehicleType | SchemaElectronicType;
  export type SchemaUsers = SchemaPersonalType | SchemaLegalPersonalType
  
  export type AllInspectSchemasOptionals =
    | SchemaPersonalType
    | SchemaVehicleType
    | SchemaLegalPersonalType
    | SchemaElectronicType
    | SchemaGnc
    | SchemaPhone;
  
  export type schemaVehicleReportType = z.infer<typeof schemaVehicleReport>;
export type SchemaVehicleCrashReport = z.infer<typeof schemaVehicleCrashReport>;
export type SchemaVehicleCrashReportData = z.infer<typeof schemaVehicleCrashReportData>;
export type SchemaVehicleCrashReportDataNotOwner = z.infer<
  typeof schemaVehicleCrashReportDataNotOwner
>;
