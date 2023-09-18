import { PhoneValues, TouchedPhoneValues } from "@/models";


export const emptyPhoneValues: PhoneValues = {
  phoneNumber: "",
  phoneService: "",
  imei: "",
};

export const touchedPhoneValues: TouchedPhoneValues = {
  phoneNumber: false,
  phoneService: false,
  imei: false,
};

export const touchedPhoneValuesTrue: TouchedPhoneValues = {
  phoneNumber: true,
  phoneService: true,
  imei: true,
};
