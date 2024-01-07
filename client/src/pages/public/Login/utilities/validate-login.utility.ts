import { InputValues } from "..";

export const validateLogin = (values: InputValues) => {
  const errors: Partial<InputValues> = {};

  const regex = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!.])(.{10,})$/,
  };

  if (!values.email?.trim().length) errors.email = "No puede estar vacio";
    if (!regex.email.test(values.email))
      errors.email = "Debe tener un formato de email";
  
  if (!values.password?.trim().length) errors.password = "No puede estar vacio";
  if (!regex.password.test(values.password))
    errors.password =
      "Debe contener al menos una mayuscula, un numero, un signo, y un minimo de 10 caracteres";

  return errors;
};
