import { ErrorsThirdPartyInjuredValues, ThirdPartyInjuredValues } from "../../models";

export const validateThirdPartyInjured = ({
  name,
  lastName,
  location,
  birthDate,
  phoneNumber,
  email,
  gender,
  dni,
  injuries,
}: ThirdPartyInjuredValues) => {
  const errors: Partial<ErrorsThirdPartyInjuredValues> | null = {};

  const regex = {
    phoneNumber: /^\d+$/,
    birthDate:
      /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/,
    time: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    year: /^\d+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    dni: /^\d{8}$/,
  };

  if (!regex.birthDate.test(birthDate))
    errors.birthDate = "Debe contener una fecha valida";
  if (!regex.dni.test(dni)) errors.dni = "Debe contener 8 digitos";
  if (!regex.phoneNumber.test(phoneNumber))
    errors.phoneNumber = "Solo puede contener numeros";
  if (gender === "default") errors.gender = "Debe seleccionar un genero";
  if (!name?.trim().length) errors.name = "No puede estar vacio";
  if (!lastName?.trim().length) errors.lastName = "No puede estar vacio";
  if (!location?.trim().length) errors.location = "No puede estar vacio";
  if (!injuries?.trim().length) errors.injuries = "No puede estar vacio";
  if (!email?.trim().length) errors.email = "No puede estar vacio";
  if (!regex.email.test(email)) errors.email = "Debe tener un formato de email";
  
  return errors;
};
