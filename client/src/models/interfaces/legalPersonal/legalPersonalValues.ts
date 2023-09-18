export interface LegalPersonalValues {
  companyName: string;
  cuit: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string
}

export interface ErrorsLegalPersonalValues {
  companyName: string;
  cuit: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string
}

export interface TouchedLegalPersonalValues {
  companyName: boolean;
  cuit: boolean;
  phoneNumber: boolean;
  email: boolean;
  altEmail: boolean;
  address: boolean
}