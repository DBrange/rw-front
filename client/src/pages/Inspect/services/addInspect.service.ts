import {
  PersonalVehicleType,
  PersonalElectronicType,
  LegalVehicleType,
  LegalElectronicType,
} from "..";

export const BaseUrl = "http://localhost:3001/v1";

export const PersonalVehicleUrl = BaseUrl + "/asset/user";

export const addInspectionPersonalVehicle = async (
  url: string,
  { arg }: { arg: PersonalVehicleType }
): Promise<Response | void> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (err) {
    throw err;
  }
};

export const PersonalElectronicUrl = BaseUrl + "/asset/electronicAsset";

export const addInspectionPersonalElectronic = async (
  url: string,
  { arg }: { arg: PersonalElectronicType }
): Promise<Response | void> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (err) {
    throw err;
  }
};

export const LegalVehicleUrl = BaseUrl + "/asset/legalAsset";

export const addInspectionLegalVehicle = async (
  url: string,
  { arg }: { arg: LegalVehicleType }
): Promise<Response | void> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (err) {
    throw err;
  }
};

export const LegalElectronicUrl = BaseUrl + "/asset/electronicAssetL";

export const addInspectionLegalElectronic = async (
  url: string,
  { arg }: { arg: LegalElectronicType }
): Promise<Response | void> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (err) {
    throw err;
  }
};
