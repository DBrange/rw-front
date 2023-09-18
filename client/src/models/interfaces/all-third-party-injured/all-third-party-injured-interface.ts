import { ErrorsThirdPartyInjuredValues, ThirdPartyInjuredValues, TouchedThirdPartyInjuredValues } from "..";

export interface AllThirdPartyInjuredValues {
  injuredInfo: ThirdPartyInjuredValues[];
}

export interface ErrorsAllThirdPartyInjuredValues {
  injuredInfo: Partial<ErrorsThirdPartyInjuredValues>[];
}

export interface TouchedAllThirdPartyInjuredValues {
  injuredInfo: TouchedThirdPartyInjuredValues[];
}
