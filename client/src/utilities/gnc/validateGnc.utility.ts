import { GncValues, ErrorsGncValues } from "@/models";

export const validateGnc = ({ oblea, plate, expireDate }: GncValues) => {
  const errors: Partial<ErrorsGncValues> | null = {};

  const regex = {
    phoneNumber: /^\d+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    expireDate:
      /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/,
    oblea: /^\d{8}$/,
  };

  const currentDate = new Date().getFullYear();

  if (Number(expireDate) > currentDate || Number(expireDate) < 1900)
    errors.expireDate = "Debe ser un año valido";
  if (!plate?.trim().length) errors.plate = "No puede estar vacio";
  if (!regex.oblea.test(oblea)) errors.oblea = "Debe contener 8 digitos";
  if (!regex.expireDate.test(expireDate))
    errors.expireDate = "Debe contener un fecha valida";

  return errors;
};
