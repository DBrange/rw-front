import { PhoneValues, ErrorsPhoneValues } from "@/models";

export const validatePhone = ({
  phoneNumber,
  phoneService,
  imei,
}: PhoneValues) => {
  const errors: Partial<ErrorsPhoneValues> | null = {};

  if (!phoneNumber?.trim().length) errors.phoneNumber = "No puede estar vacio";
  if (!phoneService?.trim().length)
    errors.phoneService = "No puede estar vacio";
  if (!imei?.trim().length) errors.imei = "No puede estar vacio";

  return errors;
};
