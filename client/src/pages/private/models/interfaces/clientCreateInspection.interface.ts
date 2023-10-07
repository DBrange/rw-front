import { AllInspectValues, ErrorsAllInspectValues, TouchedAllInspectValues } from "@/pages";

export type ClientCreateInspectionValues = Omit<
  AllInspectValues,
  "personal" | "legalPersonal"
>;
export type ErrorsClientCreateInspectionValues = Omit<
  ErrorsAllInspectValues,
  "personal" | "legalPersonal"
>;
export type TouchedClientCreateInspectionValues = Omit<
  TouchedAllInspectValues,
  "personal" | "legalPersonal"
>;
