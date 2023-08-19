import {
  LegalElectronicType,
  PersonalElectronicType,
  PersonalVehicleType,
  LegalVehicleType,
} from "../../../models";

export const BaseUrl = "http://localhost:3001/v1";

export const PersonalVehicleUrl = BaseUrl + "/asset/user";

export const addReportPersonalVehicle = async (
  url: string,
  { arg }: { arg: PersonalVehicleType }
): Promise<Response> => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const PersonalElectronicUrl = BaseUrl + "/asset/electronicAsset";

export const addReportPersonalElectronic = async (
  url: string,
  { arg }: { arg: PersonalElectronicType }
): Promise<Response> => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const LegalVehicleUrl = BaseUrl + "/asset/legalAsset";

export const addReportLegalVehicle = async (
  url: string,
  { arg }: { arg: LegalVehicleType }
): Promise<Response> => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const LegalElectronicUrl = BaseUrl + "/asset/electronicAssetL";

export const addReportLegalElectronic = async (
  url: string,
  { arg }: { arg: LegalElectronicType }
): Promise<Response> => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
