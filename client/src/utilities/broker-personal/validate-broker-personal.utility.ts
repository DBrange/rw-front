import { BrokerPersonalValues, ErrorsBrokerPersonalValues } from "@/models";

export const validateBrokerPersonal = ({
  name,
  lastName,
  phoneNumber,
  email,
  altEmail,
  gender,
  birthDate,
  dni,
  address,
  password,
  enrollment,
}: BrokerPersonalValues) => {
  type NewType = ErrorsBrokerPersonalValues;

  const errors: Partial<NewType> | null = {};

  const regex = {
    phoneNumber: /^\d+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    birthDate:
      /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/,
    dni: /^\d{8}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!.])(.{10,})$/,
  };

  const currentDate = new Date();
  const userDate = new Date(birthDate);
  if (userDate > currentDate || userDate.getFullYear() < 1900)
    errors.birthDate = "Debe contener un fecha valida";
  if (!name?.trim().length) errors.name = "No puede estar vacio";
  if (!lastName?.trim().length) errors.lastName = "No puede estar vacio";
  if (!phoneNumber?.trim().length) errors.phoneNumber = "No puede estar vacio";
  if (!regex.phoneNumber.test(phoneNumber))
    errors.phoneNumber = "Solo puede contener numeros";
  if (!email?.trim().length) errors.email = "No puede estar vacio";
  if (!regex.email.test(email)) errors.email = "Debe tener un formato de email";
  if (altEmail?.trim().length && !regex.email.test(altEmail))
    errors.altEmail = "Debe tener un formato de email o puede estar vacio";
  if (gender === "default") errors.gender = "Debe seleccionar un genero";
  if (!regex.birthDate.test(birthDate))
    errors.birthDate = "Debe contener un fecha valida";
  if (!regex.dni.test(dni)) errors.dni = "Debe contener 8 digitos";
  if (!address?.trim().length) errors.address = "No puede estar vacio";
  if (!regex.password.test(password))
    errors.password =
      "Debe contener al menos una mayuscula, un numero, un signo, y un minimo de 10 caracteres";
if (!enrollment?.trim().length) errors.enrollment = "No puede estar vacio";
  return errors;
};
