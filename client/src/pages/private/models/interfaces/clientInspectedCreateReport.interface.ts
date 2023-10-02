import {
  AllReportValues,
  ErrorsAllReportValues,
  TouchedAllReportValues,
} from "@/pages";

export type ClientInspectedCreateReportValues = Omit<
  AllReportValues,
  | "personal"
  | "legalPersonal"
  | "vehicleReport"
  | "electronic"
  | "gnc"
  | "phone"
>;
export type ErrorsClientInspectedCreateReportValues = Omit<
  ErrorsAllReportValues,
  | "personal"
  | "legalPersonal"
  | "vehicleReport"
  | "electronic"
  | "gnc"
  | "phone"
>;
export type TouchedClientInspectedCreateReportValues = Omit<
  TouchedAllReportValues,
  | "personal"
  | "legalPersonal"
  | "vehicleReport"
  | "electronic"
  | "gnc"
  | "phone"
>;
