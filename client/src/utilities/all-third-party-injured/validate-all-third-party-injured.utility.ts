import { validateThirdPartyInjured } from "..";
import {
  AllThirdPartyInjuredValues,
  ErrorsAllThirdPartyInjuredValues,
  ErrorsThirdPartyVehicleValues,
} from "../../models";

export const validateAllThirdPartyInjured = ({
  injuredInfo,
}: AllThirdPartyInjuredValues) => {
  const errors: Partial<ErrorsAllThirdPartyInjuredValues> | null = {};

  // if (!amount.toString()?.trim().length) errors.amount = "No puede estar vacio";


  let thirdPartyVehiclesErrors:
    | Partial<ErrorsThirdPartyVehicleValues>[]
    | undefined;

  if (injuredInfo.length > 0) {
    thirdPartyVehiclesErrors = injuredInfo?.map((injured) => {
      return validateThirdPartyInjured(injured);
    });

    errors.injuredInfo = thirdPartyVehiclesErrors;
  }
  return errors;
};
