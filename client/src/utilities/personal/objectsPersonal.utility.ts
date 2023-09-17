import { PersonalValues, TouchedPersonalValues } from "@/models";

export const emptyPersonalValues: PersonalValues = {
  name: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  altEmail: "",
  gender: "default",
  birthDate: "",
  dni: "",
  address: "",
};

export const touchedPersonalValues: TouchedPersonalValues = {
  name: false,
  lastName: false,
  phoneNumber: false,
  email: false,
  altEmail: false,
  gender: false,
  birthDate: false,
  dni: false,
  address: false,
};

export const touchedPersonalValuesTrue: TouchedPersonalValues = {
  name: true,
  lastName: true,
  phoneNumber: true,
  email: true,
  altEmail: true,
  gender: true,
  birthDate: true,
  dni: true,
  address: true,
};
