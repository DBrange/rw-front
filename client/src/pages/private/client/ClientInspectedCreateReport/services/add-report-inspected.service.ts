import { TheftType, FireType, CrashType, DamageType } from "@/models/interfaces/add-report-in-inspection.interface";
import { baseUrl } from "@/pages";
import { loaderImageService, modalSentService } from "@/services/sharing-information.service";


export const reportInInspectionTheftUrl = (
  brokerId?: string,
  clietnId?: string,
  assetId?: string
) => `${baseUrl}/sinister/theft-inspection/${brokerId}/${clietnId}/${assetId}`;

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

export const reportInInspectionDamageUrl = (
  brokerId?: string,
  clietnId?: string,
  assetId?: string
) => `${baseUrl}/sinister/damage-inspection/${brokerId}/${clietnId}/${assetId}`;

export const addReportDamage = async (
  url: string,
  { arg }: { arg: DamageType }
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

export const reportInInspectionFireUrl = (
  brokerId?: string,
  clietnId?: string,
  assetId?: string
) => `${baseUrl}/sinister/fire-inspection/${brokerId}/${clietnId}/${assetId}`;

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

export const reportInInspectionCrashUrl = (brokerId?:string,clietnId?: string,assetId?: string) =>
  `${baseUrl}/sinister/crash-inspection/${brokerId}/${clietnId}/${assetId}`;

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
