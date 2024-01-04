import { IsTireValues, ErrorsIsTireValues } from "@/models";

export const validateIsTire = ({
  tirePhoto,
  replacementLocation,
  tireAmount,
}: IsTireValues) => {
  const errors: Partial<ErrorsIsTireValues> | null = {};

  const regex = {
    tireAmount: /^\d+$/,
  };

  if (!replacementLocation?.trim().length)
    errors.replacementLocation = "No puede estar vacio";
  if (tireAmount < 0) errors.replacementLocation = "No puede estar vacio";
  if (!regex.tireAmount.test(tireAmount.toString()))
    errors.tireAmount = "No puede estar vacio";

  if (!tirePhoto.length)
    errors.tirePhoto =
      "Debe agregar las images correspondientes, un total de 1";
  if (tirePhoto.length !== 1)
    errors.tirePhoto =
      "Debe agregar las images correspondientes, un total de 1";
  if (tirePhoto.some((el) => !el))
    errors.tirePhoto =
      "Debe agregar las images correspondientes, un total de 1";

  return errors;
};
