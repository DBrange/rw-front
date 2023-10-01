import {
  BrokerLegalPersonalValues,
  ErrorsBrokerLegalPersonalValues,
} from "@/models";

export const validateBrokerLegalPersonal = ({
  companyName,
  cuit,
  phoneNumber,
  email,
  altEmail,
  address,
  password,
  enrollment,
  businessName,
}: BrokerLegalPersonalValues) => {
  const errors: Partial<ErrorsBrokerLegalPersonalValues> | null = {};

  const regex = {
    phoneNumber: /^\d+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    cuit: /^\d{11}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!.])(.{10,})$/,
  };

  if (!companyName?.trim().length) errors.companyName = "No puede estar vacio";
  if (!phoneNumber?.trim().length) errors.phoneNumber = "No puede estar vacio";
  if (!regex.phoneNumber.test(phoneNumber))
    errors.phoneNumber = "Solo puede contener numeros";
  if (!email?.trim().length) errors.email = "No puede estar vacio";
  if (!regex.email.test(email)) errors.email = "Debe tener un formato de email";
  if (altEmail?.trim().length && !regex.email.test(altEmail))
    errors.altEmail = "Debe tener un formato de email o puede estar vacio";
  if (!regex.cuit.test(cuit)) errors.cuit = "Debe contener 8 digitos";
  if (!address?.trim().length) errors.address = "No puede estar vacio";
  if (!regex.password.test(password))
    errors.password =
      "Debe contener al menos una mayuscula, un numero, un signo, y un minimo de 10 caracteres";
  if (!enrollment?.trim().length) errors.enrollment = "No puede estar vacio";
  if (!businessName?.trim().length)
    errors.businessName = "No puede estar vacio";

  return errors;
};
