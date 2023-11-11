import {
  VehicleCrashType,
  VehicleFireType,
  VehicleTheftType,
} from "@/models/interfaces/add-report.interface";
import {
  loaderImageService,
  modalSentService,
} from "@/services/sharing-information.service";
import { BaseUrl } from "../..";



export const reportInClientUserTheftUrl = (id?: string) =>
  `${BaseUrl}/sinister/in-user-theft/${id}`;

export const reportInClientLegalTheftUrl = (id?: string) =>
  `${BaseUrl}/sinister/in-legal-user-theft/${id}`;

export const addReportVehicleTheft = async (
  url: string,
  { arg }: { arg: VehicleTheftType }
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

export const reportInClientUserFireUrl = (id?: string) =>
  `${BaseUrl}/sinister/in-user-fire/${id}`;

export const reportInClientLegalFireUrl = (id?: string) =>
  `${BaseUrl}/sinister/in-legal-user-fire/${id}`;

export const addReportVehicleFire = async (
  url: string,
  { arg }: { arg: VehicleFireType }
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

export const reportInClientUserCrashUrl = (id?: string) =>
  `${BaseUrl}/sinister/in-user-crash/${id}`;

export const reportInClientLegalCrashUrl = (id?: string) =>
  `${BaseUrl}/sinister/in-legal-user-crash/${id}`;

export const addReportVehicleCrash = async (
  url: string,
  { arg }: { arg: VehicleCrashType }
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
