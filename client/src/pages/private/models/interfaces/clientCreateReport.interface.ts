import { AllReportValues, ErrorsAllReportValues, TouchedAllReportValues } from "@/pages";

export type ClientCreateReportValues = Omit<
  AllReportValues,
  "personal" | "legalPersonal"
>;
export type ErrorsClientCreateReportValues = Omit<
  ErrorsAllReportValues,
  "personal" | "legalPersonal"
>;
export type TouchedClientCreateReportValues = Omit<
  TouchedAllReportValues,
  "personal" | "legalPersonal"
>;
