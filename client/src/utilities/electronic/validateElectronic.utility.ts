import { ElectronicValues, ErrorsElectronicValues } from "@/models";

export const validateElectronic = ({
  type,
  brand,
  model,
}: ElectronicValues) => {
  const errors: Partial<ErrorsElectronicValues> | null = {};

  if (!brand?.trim().length) errors.brand = "No puede estar vacio";
  if (!model?.trim().length) errors.model = "No puede estar vacio";
  if (type === "default")
    errors.type = "Debe seleccionar un tipo de electrodomestico";

  return errors;
};
