import {
  VehicleCrashType,
  VehicleDamageType,
  VehicleFireType,
  VehicleTheftType,
} from "@/models/interfaces/add-report.interface";
import { baseUrl } from "@/pages";
import {
  loaderImageService,
  modalSentService,
} from "@/services/sharing-information.service";

export const reportInClientUserTheftUrl = (
  brokerId?: string,
  clientId?: string,
) => `${baseUrl}/sinister/theft/${brokerId}/${clientId}`;

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

export const reportInClientUserDamageUrl = (
  brokerId?: string,
  clientId?: string,
) => `${baseUrl}/sinister/damage/${brokerId}/${clientId}`;

export const addReportVehicleDamage = async (
  url: string,
  { arg }: { arg: VehicleDamageType }
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

export const reportInClientUserFireUrl = (brokerId?: string, clientId?: string) =>
  `${baseUrl}/sinister/fire/${brokerId}/${clientId}`;

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

export const reportInClientUserCrashUrl = (brokerId?: string, clientId?: string) =>
  `${baseUrl}/sinister/crash/${brokerId}/${clientId}`;

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
