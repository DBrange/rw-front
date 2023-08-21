import {
  SchemaPersonalType,
  SchemaVehicleReportType,
  SchemaGncType,
  SchemaThirdInjuredType,
  SchemaVehicleCrashReportDataType,
  SchemaVehicleCrashReportType,
  SchemaVehicleTheftReportType,
  SchemaVehicleFireReportType,
  SchemaIsTireType,
  SchemaLegalPersonalType,
  SchemaElectronicType,
  SchemaElectronicTheftReportType,
  SchemaPhoneType,
} from "../../../models";

export type PersonalVehicleCrashType =
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType &
      SchemaThirdInjuredType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType &
      SchemaThirdInjuredType);

export type PersonalVehicleTheftType =
  | (SchemaPersonalType & SchemaVehicleReportType & SchemaVehicleTheftReportType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleTheftReportType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleTheftReportType &
      SchemaIsTireType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleTheftReportType &
      SchemaIsTireType);

export type PersonalVehicleFireType =
  | (SchemaPersonalType & SchemaVehicleReportType & SchemaVehicleFireReportType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleFireReportType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleFireReportType &
      SchemaThirdInjuredType)
  | (SchemaPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleFireReportType &
      SchemaThirdInjuredType);

export type LegalVehicleCrashType =
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType &
      SchemaThirdInjuredType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleCrashReportType &
      SchemaVehicleCrashReportDataType &
      SchemaThirdInjuredType);

export type LegalPersonalVehicleTheftType =
  | (SchemaLegalPersonalType & SchemaVehicleReportType & SchemaVehicleTheftReportType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleTheftReportType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleTheftReportType &
      SchemaIsTireType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleTheftReportType &
      SchemaIsTireType);

export type LegalPersonalVehicleFireType =
  | (SchemaLegalPersonalType & SchemaVehicleReportType & SchemaVehicleFireReportType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleFireReportType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaVehicleFireReportType &
      SchemaThirdInjuredType)
  | (SchemaLegalPersonalType &
      SchemaVehicleReportType &
      SchemaGncType &
      SchemaVehicleFireReportType &
      SchemaThirdInjuredType);

export type PersonalElectronicTheftType =
  | (SchemaPersonalType &
      SchemaElectronicType &
      SchemaElectronicTheftReportType)
  | (SchemaPersonalType &
      SchemaElectronicType &
      SchemaElectronicTheftReportType)
  | (SchemaPersonalType &
      SchemaElectronicType &
      SchemaPhoneType &
      SchemaElectronicTheftReportType)
  | (SchemaPersonalType &
      SchemaElectronicType &
      SchemaPhoneType &
      SchemaElectronicTheftReportType);

export type LegalElectronicTheftType =
  | (SchemaLegalPersonalType &
      SchemaElectronicType &
      SchemaElectronicTheftReportType)
  | (SchemaLegalPersonalType &
      SchemaElectronicType &
      SchemaElectronicTheftReportType)
  | (SchemaLegalPersonalType &
      SchemaElectronicType &
      SchemaPhoneType &
      SchemaElectronicTheftReportType)
  | (SchemaLegalPersonalType &
      SchemaElectronicType &
      SchemaPhoneType &
      SchemaElectronicTheftReportType);


