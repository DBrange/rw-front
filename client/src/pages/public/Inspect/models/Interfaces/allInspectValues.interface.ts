import { PersonalValues, LegalPersonalValues, GncValues, PhoneValues, ErrorsPersonalValues, ErrorsGncValues, ErrorsPhoneValues, TouchedPersonalValues, TouchedLegalPersonalValues, TouchedGncValues, TouchedPhoneValues, ElectronicValues, ErrorsElectronicValues, TouchedElectronicValues, VehicleValues, ErrorsVehicleValues, TouchedVehicleValues, SwornDeclaration, ErrorsSwornDeclaration, TouchedSwornDeclaration } from "@/models";

export interface AllInspectValues {
  personal: PersonalValues;
  legalPersonal: LegalPersonalValues;
  vehicle: VehicleValues;
  electronic: ElectronicValues;
  gnc: GncValues;
  phone: PhoneValues;
  swornDeclaration: SwornDeclaration;
}

export interface ErrorsAllInspectValues {
  personal: Partial<ErrorsPersonalValues>;
  legalPersonal: Partial<LegalPersonalValues>;
  vehicle: Partial<ErrorsVehicleValues>;
  electronic: Partial<ErrorsElectronicValues>;
  gnc: Partial<ErrorsGncValues>;
  phone: Partial<ErrorsPhoneValues>;
  swornDeclaration: Partial<ErrorsSwornDeclaration>;
}

export interface TouchedAllInspectValues {
  personal: TouchedPersonalValues;
  legalPersonal: TouchedLegalPersonalValues;
  vehicle: TouchedVehicleValues;
  electronic: TouchedElectronicValues;
  gnc: TouchedGncValues;
  phone: TouchedPhoneValues;
  swornDeclaration: TouchedSwornDeclaration;
}
