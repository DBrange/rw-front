import { VehicleReportValues, ErrorsVehicleReportValues } from "@/models";

export const validateVehicleReport = ({
  plate,
  year,
  brand,
  model,
  color,
  fuel,
  type,
  images,
}: VehicleReportValues) => {
  const errors: Partial<ErrorsVehicleReportValues> | null = {};

  const regex = {
    year: /^\d+$/,
  };

  if (!plate?.trim().length) errors.plate = "No puede estar vacio";
  if (!year?.toString()?.trim().length) errors.year = "No puede estar vacio";
  if (year?.toString()?.trim().length !== 4)
    errors.year = "Debe ser un año valido";
  if (!regex.year.test(year?.toString())) errors.year = "Solo numeros";
  if (!brand?.trim().length) errors.brand = "No puede estar vacio";
  if (!model?.trim().length) errors.model = "No puede estar vacio";
  if (!color?.trim().length) errors.color = "No puede estar vacio";
  if (fuel === "default")
    errors.fuel = "Debe seleccionar un tipo de combustible";
  if (type === "default") errors.type = "Debe seleccionar un tipo de vehiculo";
  if (images.length < 8)
    errors.images = "Debe agregar las images correspondientes, un total de 8";

  return errors;
};
