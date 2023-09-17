import { LegalPersonalValues, TouchedLegalPersonalValues } from "@/models";


export const emptyLegalPersonalValues: LegalPersonalValues = {
  companyName: "",
  cuit: "",
  phoneNumber: "",
  email: "",
  altEmail: "",
  address: "",
};

export const touchedLegalPersonalValues: TouchedLegalPersonalValues = {
  companyName: false,
  cuit: false,
  phoneNumber: false,
  email: false,
  altEmail: false,
  address: false,
};

export const touchedLegalPersonalValuesTrue: TouchedLegalPersonalValues = {
  companyName: true,
  cuit: true,
  phoneNumber: true,
  email: true,
  altEmail: true,
  address: true,
};
