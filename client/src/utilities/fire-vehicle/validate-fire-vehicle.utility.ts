import { ErrorsFireVehicleValues, FireVehicleValues } from "../../models";

export const validateFireVehicle = ({
  time,
  date,
  location,
  details,
  amount,
  thirdInjured,
}: FireVehicleValues) => {
  const errors: Partial<ErrorsFireVehicleValues> | null = {};

  const regex = {
    date: /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/,
    time: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    amount: /^\d+$/,
  };

  const currentDate = new Date();
  const userDate = new Date(date);

  if (thirdInjured) {
    if (amount < 1) errors.amount = "Debe contener al menos 1 lesionado";
  }
  if (userDate > currentDate || userDate.getFullYear() < 1900)
    errors.date = "Debe contener un fecha valida";
  if (!regex.amount.test(amount.toString().trim()))
    errors.amount = "Solo puede contener numeros";
  if (!location?.trim().length) errors.location = "No puede estar vacio";
  if (!details?.trim().length) errors.details = "No puede estar vacio";
  // if (!ambulanceTo?.trim().length) errors.details = "No puede estar vacio";
  if (!regex.date.test(date)) errors.date = "Debe contener un fecha valida";
  if (!regex.time.test(time)) errors.time = "Debe contener un horario valido";

  return errors;
};
