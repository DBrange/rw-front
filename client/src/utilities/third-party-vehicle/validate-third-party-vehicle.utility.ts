import {
  ErrorsThirdPartyVehicleValues,
  ThirdPartyVehicleValues,
} from "../../models";

export const validateThirdPartyVehicle = ({
  year,
  brand,
  model,
  plate,
  insuranceCompany,
  insurancePolicy,
  ownerName,
  ownerLastName,
  ownerDni,
  address,
  phoneNumber,
  licensePhoto,
  email,
  name,
  lastName,
  dni,
  owner,
}: ThirdPartyVehicleValues) => {
  const errors: Partial<ErrorsThirdPartyVehicleValues> | null = {};

  const regex = {
    phoneNumber: /^\d+$/,
    date: /^(?:\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-30|(?:0[13578]|1[02])-31)$/,
    time: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
    year: /^\d+$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    dni: /^\d{8}$/,
  };

  if (year?.toString()?.trim().length !== 4)
    errors.year = "Debe ser un año valido";
  if (!regex.year.test(year?.toString())) errors.year = "Solo numeros";
  if (!brand?.trim().length) errors.brand = "No puede estar vacio";
  if (!model?.trim().length) errors.model = "No puede estar vacio";
  if (!plate?.trim().length) errors.plate = "No puede estar vacio";
  if (!insuranceCompany?.trim().length)
    errors.insuranceCompany = "No puede estar vacio";
  if (!insurancePolicy?.trim().length)
    errors.insurancePolicy = "No puede estar vacio";
  if (!ownerName?.trim().length) errors.ownerName = "No puede estar vacio";
  if (!ownerLastName?.trim().length)
    errors.ownerLastName = "No puede estar vacio";
  if (!regex.dni.test(ownerDni)) errors.ownerDni = "Debe contener 8 digitos";
  if (!address?.trim().length) errors.address = "No puede estar vacio";
  if (!email?.trim().length) errors.email = "No puede estar vacio";
  if (!regex.phoneNumber.test(phoneNumber))
    errors.phoneNumber = "Solo puede contener numeros";
  if (licensePhoto.length < 8)
    errors.licensePhoto =
      "Debe agregar las images correspondientes, un total de 8";
  if (!owner) {
    if (!name?.trim().length) errors.name = "No puede estar vacio";
    if (!lastName?.trim().length) errors.lastName = "No puede estar vacio";
    if (!regex.dni.test(dni)) errors.dni = "Debe contener 8 digitos";
  }

  return errors;
};
