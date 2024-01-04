import {
  TheftElectronicValues,
  ErrorsTheftElectronicValues,
} from "../../models";

export const validateTheftElectronic = ({
  time,
  date,
  location,
  reportPhoto,
}: TheftElectronicValues) => {
  const errors: Partial<ErrorsTheftElectronicValues> | null = {};

  const regex = {
    date: /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/,
    time: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  };

  const currentDate = new Date();
  const userDate = new Date(date);

  if (userDate > currentDate || userDate.getFullYear() < 1900)
    errors.date = "Debe contener un fecha valida";
  if (!location?.trim().length) errors.location = "No puede estar vacio";
  if (!regex.date.test(date)) errors.date = "Debe contener un fecha valida";
  if (!regex.time.test(time)) errors.time = "Debe contener un horario valido";
  if (!reportPhoto.length)
    errors.reportPhoto =
      "Debe agregar las images correspondientes, un total de 2";
  if (reportPhoto.length !== 2)
    errors.reportPhoto =
      "Debe agregar las images correspondientes, un total de 2";
  if (reportPhoto.some((el) => !el))
    errors.reportPhoto =
      "Debe agregar las images correspondientes, un total de 2";
  return errors;
};
