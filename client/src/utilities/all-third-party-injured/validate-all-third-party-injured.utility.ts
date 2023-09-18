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
    // console.log('nose')
    thirdPartyVehiclesErrors = injuredInfo?.map((injured) => {
      // console.log(validateThirdPartyInjured(injured));
      return validateThirdPartyInjured(injured);
    });

    errors.injuredInfo = thirdPartyVehiclesErrors;
    // console.log(errors.injuredInfo);
  }
  return errors;
};
