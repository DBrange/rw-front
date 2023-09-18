import { ThirdPartyInjuredValues, TouchedThirdPartyInjuredValues } from "@/models";

export const emptyThirdPartyInjured: ThirdPartyInjuredValues = {
  name: "",
  lastName: "",
  location: "",
  birthDate: "",
  phoneNumber: "",
  email: "",
  gender: "default",
  dni: "",
  injuries: "",
};

export const touchedThirdPartyInjured: TouchedThirdPartyInjuredValues = {
  name: false,
  lastName: false,
  location: false,
  birthDate: false,
  phoneNumber: false,
  email: false,
  gender: false,
  dni: false,
  injuries: false,
};

export const touchedThirdPartyInjuredTrue: TouchedThirdPartyInjuredValues = {
  name: true,
  lastName: true,
  location: true,
  birthDate: true,
  phoneNumber: true,
  email: true,
  gender: true,
  dni: true,
  injuries: true,
};
