import {
  ErrorsPersonalValues,
  ErrorsLegalPersonalValues,
  ErrorsGncValues,
  ErrorsPhoneValues,
  ErrorsElectronicValues,
  ErrorsSwornDeclaration,
  ErrorsVehicleValues,
  ErrorsAllCrashVehiclesValues,
  ErrorsAllThirdPartyInjuredValues,
  ErrorsCrashVehicleValues,
  ErrorsFireVehicleValues,
  ErrorsIsTireValues,
  ErrorsTheftElectronicValues,
  ErrorsTheftVehiclesValues,
} from "@/models";

type allErrosType =
  | Partial<ErrorsPersonalValues>
  | Partial<ErrorsLegalPersonalValues>
  | Partial<ErrorsVehicleValues>
  | Partial<ErrorsElectronicValues>
  | Partial<ErrorsGncValues>
  | Partial<ErrorsPhoneValues>
  | Partial<ErrorsSwornDeclaration>
  | Partial<ErrorsTheftVehiclesValues>
  | Partial<ErrorsTheftElectronicValues>
  | Partial<ErrorsIsTireValues>
  | Partial<ErrorsFireVehicleValues>
  | Partial<ErrorsCrashVehicleValues>
  | Partial<ErrorsAllThirdPartyInjuredValues>
  | Partial<ErrorsAllCrashVehiclesValues>
  | Partial<ErrorsSwornDeclaration>
  | undefined;

export const validate = (value: allErrosType): boolean =>
  !!Object.keys({ ...value }).length;
