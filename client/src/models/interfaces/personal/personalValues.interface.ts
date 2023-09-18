export interface PersonalValues {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  gender: "default" | "HOMBRE" | "MUJER" | "OTRO";
  birthDate: string;
  dni: string;
  address: string;
}

export interface ErrorsPersonalValues {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  gender: string;
  birthDate: string;
  dni: string;
  address: string;
}

export interface TouchedPersonalValues {
  name: boolean;
  lastName: boolean;
  phoneNumber: boolean;
  email: boolean;
  altEmail: boolean;
  gender: boolean;
  birthDate: boolean;
  dni: boolean;
  address: boolean;
}
