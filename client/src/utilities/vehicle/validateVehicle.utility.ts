import { VehicleValues, ErrorsVehicleValues } from "@/models";

export const validateVehicle = ({
  plate,
  year,
  brand,
  model,
  color,
  tireBrand,
  tireSize,
  fuel,
  type,
  images,
}: VehicleValues) => {
  const errors: Partial<ErrorsVehicleValues> | null = {};

  const regex = {
    year: /^\d+$/,
  };

  const currentDate = new Date().getFullYear();

  if (!plate?.trim().length) errors.plate = "No puede estar vacio";
  if (!year?.toString()?.trim().length) errors.year = "No puede estar vacio";
  if (year?.toString()?.trim().length !== 4)
    errors.year = "Debe ser un año valido";
  if (!regex.year.test(year?.toString())) errors.year = "Solo numeros";
  if (Number(year) > currentDate || Number(year) < 1900) errors.year = "Debe ser un año valido";
  if (!brand?.trim().length) errors.brand = "No puede estar vacio";
  if (!model?.trim().length) errors.model = "No puede estar vacio";
  if (!color?.trim().length) errors.color = "No puede estar vacio";
  if (!tireBrand?.trim().length) errors.tireBrand = "No puede estar vacio";
  if (!tireSize?.trim().length) errors.tireSize = "No puede estar vacio";
  if (fuel === "default")
    errors.fuel = "Debe seleccionar un tipo de combustible";
  if (type === "default") errors.type = "Debe seleccionar un tipo de vehiculo";
  if (!images.length) errors.images = "Debe agregar las images correspondientes, un total de 8";
  if (images.some( el => !el ))
    errors.images = "Debe agregar las images correspondientes, un total de 8";

  return errors;
};
