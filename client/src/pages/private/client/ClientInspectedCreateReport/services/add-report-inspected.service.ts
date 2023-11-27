import { TheftType, FireType, CrashType } from "@/models/interfaces/add-report-in-inspection.interface";
import { baseUrl } from "@/pages";
import { loaderImageService, modalSentService } from "@/services/sharing-information.service";


export const reportInInspectionTheftUrl = (id?: string) =>
  `${baseUrl}/sinister/in-user-inspection-theft/${id}`;

export const addReportTheft = async (
  url: string,
  { arg }: { arg: TheftType }
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

export const reportInInspectionFireUrl = (id?: string) =>
  `${baseUrl}/sinister/in-user-inspection-fire/${id}`;

export const addReportFire = async (
  url: string,
  { arg }: { arg: FireType }
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

export const reportInInspectionCrashUrl = (id?: string) =>
  `${baseUrl}/sinister/in-user-inspection-crash/${id}`;

export const addReportCrash = async (
  url: string,
  { arg }: { arg: CrashType }
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
