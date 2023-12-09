import {
  PersonalValues,
  LegalPersonalValues,
  ElectronicValues,
  GncValues,
  PhoneValues,
  SwornDeclaration,
  ErrorsPersonalValues,
  ErrorsElectronicValues,
  ErrorsGncValues,
  ErrorsPhoneValues,
  ErrorsSwornDeclaration,
  TouchedPersonalValues,
  TouchedLegalPersonalValues,
  TouchedElectronicValues,
  TouchedGncValues,
  TouchedPhoneValues,
  TouchedSwornDeclaration,
  VehicleReportValues,
  TheftVehiclesValues,
  TheftElectronicValues,
  FireVehicleValues,
  CrashVehicleValues,
  AllThirdPartyInjuredValues,
  AllCrashVehiclesValues,
  IsTireValues,
  ErrorsAllCrashVehiclesValues,
  ErrorsAllThirdPartyInjuredValues,
  ErrorsCrashVehicleValues,
  ErrorsFireVehicleValues,
  ErrorsIsTireValues,
  ErrorsTheftElectronicValues,
  ErrorsTheftVehiclesValues,
  TouchedAllCrashVehiclesValues,
  TouchedAllThirdPartyInjuredValues,
  TouchedCrashVehicleValues,
  TouchedFireVehicleValues,
  TouchedIsTireValues,
  TouchedTheftElectronicValues,
  TouchedTheftVehiclesValues,
  TouchedVehicleReportValues,
  ErrorsVehicleReportValues,
  DamageVehiclesValues,
  DamageElectronicValues,
  ErrorsDamageElectronicValues,
  ErrorsDamageVehiclesValues,
  TouchedDamageElectronicValues,
  TouchedDamageVehiclesValues,
} from "@/models";

export interface AllReportValues {
  personal: PersonalValues;
  legalPersonal: LegalPersonalValues;
  vehicleReport: VehicleReportValues;
  electronic: ElectronicValues;
  gnc: GncValues;
  phone: PhoneValues;
  theftVehicle: TheftVehiclesValues;
  theftElectronic: TheftElectronicValues;
  damageVehicle: DamageVehiclesValues;
  damageElectronic: DamageElectronicValues;
  isTire: IsTireValues;
  fire: FireVehicleValues;
  crash: CrashVehicleValues;
  thirdPartyInjured: AllThirdPartyInjuredValues;
  thirdPartyVehicle: AllCrashVehiclesValues;
  swornDeclaration: SwornDeclaration;
}

export interface ErrorsAllReportValues {
  personal: Partial<ErrorsPersonalValues>;
  legalPersonal: Partial<LegalPersonalValues>;
  vehicleReport: Partial<ErrorsVehicleReportValues>;
  electronic: Partial<ErrorsElectronicValues>;
  gnc: Partial<ErrorsGncValues>;
  phone: Partial<ErrorsPhoneValues>;
  theftVehicle: Partial<ErrorsTheftVehiclesValues>;
  theftElectronic: Partial<ErrorsTheftElectronicValues>;
  damageVehicle: Partial<ErrorsDamageVehiclesValues>;
  damageElectronic: Partial<ErrorsDamageElectronicValues>;
  isTire: Partial<ErrorsIsTireValues>;
  fire: Partial<ErrorsFireVehicleValues>;
  crash: Partial<ErrorsCrashVehicleValues>;
  thirdPartyInjured: Partial<ErrorsAllThirdPartyInjuredValues>;
  thirdPartyVehicle: Partial<ErrorsAllCrashVehiclesValues>;
  swornDeclaration: Partial<ErrorsSwornDeclaration>;
}

export interface TouchedAllReportValues {
  personal: TouchedPersonalValues;
  legalPersonal: TouchedLegalPersonalValues;
  vehicleReport: TouchedVehicleReportValues;
  electronic: TouchedElectronicValues;
  gnc: TouchedGncValues;
  phone: TouchedPhoneValues;
  theftVehicle: TouchedTheftVehiclesValues;
  theftElectronic: TouchedTheftElectronicValues;
  damageVehicle: TouchedDamageVehiclesValues;
  damageElectronic: TouchedDamageElectronicValues;
  isTire: TouchedIsTireValues;
  fire: TouchedFireVehicleValues;
  crash: TouchedCrashVehicleValues;
  thirdPartyInjured: TouchedAllThirdPartyInjuredValues;
  thirdPartyVehicle: TouchedAllCrashVehiclesValues;
  swornDeclaration: TouchedSwornDeclaration;
}
