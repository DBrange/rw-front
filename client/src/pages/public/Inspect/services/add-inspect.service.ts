import { PersonalVehicleType, PersonalElectronicType, LegalVehicleType, LegalElectronicType } from "@/models";
import { loaderImageService, modalSentService } from "@/services/sharing-information.service";
import { baseUrl } from "../..";



export const PersonalVehicleUrl = baseUrl + "/asset/user";

export const addInspectionPersonalVehicle = async (
  url: string,
  { arg }: { arg: PersonalVehicleType }
): Promise<Response | void> => {
  try {
    loaderImageService.setSubject(true);
    modalSentService.setSubject(false);
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

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
  } catch (err) {
    throw err;
  }
};

export const PersonalElectronicUrl = baseUrl + "/asset/electronicAsset";

export const addInspectionPersonalElectronic = async (
  url: string,
  { arg }: { arg: PersonalElectronicType }
): Promise<Response | void> => {
  loaderImageService.setSubject(true);
  modalSentService.setSubject(false);
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

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
  } catch (err) {
    throw err;
  }
};

export const LegalVehicleUrl = baseUrl + "/asset/legalAsset";

export const addInspectionLegalVehicle = async (
  url: string,
  { arg }: { arg: LegalVehicleType }
): Promise<Response | void> => {
  loaderImageService.setSubject(true);
  modalSentService.setSubject(false);
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

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
  } catch (err) {
    throw err;
  }
};

export const LegalElectronicUrl = baseUrl + "/asset/electronicAssetL";

export const addInspectionLegalElectronic = async (
  url: string,
  { arg }: { arg: LegalElectronicType }
): Promise<Response | void> => {
  loaderImageService.setSubject(true);
  modalSentService.setSubject(false);
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

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
  } catch (err) {
    throw err;
  }
};
