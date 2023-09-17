import { CrashVehicleValues, ErrorsCrashVehicleValues } from "../../models";

export const validateCrashVehicle = ({
  time,
  date,
  location,
  details,
  amountVehicles,
  thirdInjured,
  amount,
}: CrashVehicleValues) => {
  const errors: Partial<ErrorsCrashVehicleValues> | null = {};

  const regex = {
    date: /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/,
    time: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    amountVehicles: /^\d+$/,
    amount: /^\d+$/,
  };

  if (thirdInjured) {
    if (amount < 1) errors.amount = "Debe contener al menos 1 lesionado";
  }
  if (!regex.amount.test(amount.toString().trim()))
    errors.amount = "Solo puede contener numeros";
  if (!amountVehicles.toString()?.trim().length)
    errors.amountVehicles = "No puede estar vacio";

  if (amountVehicles <= 0)
    errors.amountVehicles = "Debe contener al menos 1 vehiculo";
  if (!regex.amountVehicles.test(amountVehicles.toString()))
    errors.amountVehicles = "Solo puede contener numeros";
  if (!location?.trim().length) errors.location = "No puede estar vacio";
  if (!details?.trim().length) errors.details = "No puede estar vacio";
  // if (!ambulanceTo?.trim().length) errors.details = "No puede estar vacio";
  if (!regex.date.test(date)) errors.date = "Debe contener un fecha valida";
  if (!regex.time.test(time)) errors.time = "Debe contener un horario valido";

  return errors;
};
