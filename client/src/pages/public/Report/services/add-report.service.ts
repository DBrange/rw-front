import {
  PersonalVehicleCrashType,
  PersonalVehicleTheftType,
  PersonalVehicleFireType,
  LegalVehicleCrashType,
  LegalPersonalVehicleTheftType,
  LegalPersonalVehicleFireType,
  PersonalElectronicTheftType,
  LegalElectronicTheftType,
} from "@/models";
import { loaderImageService, modalSentService } from "@/services/sharing-information.service";

export const BaseUrlReport = "http://localhost:3001/v1";

export const PersonalVehicleCrashUrl =
  BaseUrlReport + "/sinister/user-vehicle-crash";

export const addReportPersonalVehicleCrash = async (
  url: string,
  { arg }: { arg: PersonalVehicleCrashType }
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

export const PersonalVehicleTheftUrl =
  BaseUrlReport + "/sinister/user-vehicle-theft";

export const addReportPersonalVehicleTheft = async (
  url: string,
  { arg }: { arg: PersonalVehicleTheftType }
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

export const PersonalVehicleFireUrl =
  BaseUrlReport + "/sinister/user-vehicle-fire";

export const addReportPersonalVehicleFire = async (
  url: string,
  { arg }: { arg: PersonalVehicleFireType }
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

export const LegalPersonalVehicleCrashUrl =
  BaseUrlReport + "/sinister/legalUser-vehicle-crash";

export const addReportLegalVehicleCrash = async (
  url: string,
  { arg }: { arg: LegalVehicleCrashType }
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

export const LegalPersonalVehicleTheftUrl =
  BaseUrlReport + "/sinister/legalUser-vehicle-theft";

export const addReportLegalPersonalVehicleTheft = async (
  url: string,
  { arg }: { arg: LegalPersonalVehicleTheftType }
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

export const LegalPersonalVehicleFireUrl =
  BaseUrlReport + "/sinister/legalUser-vehicle-fire";

export const addReportLegalPersonalVehicleFire = async (
  url: string,
  { arg }: { arg: LegalPersonalVehicleFireType }
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

export const PersonalElectronicTheftUrl =
  BaseUrlReport + "/sinister/user-electronic-theft";

export const addReportPersonalElectronicTheft = async (
  url: string,
  { arg }: { arg: PersonalElectronicTheftType }
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

export const LegalPersonalElectronicTheftUrl =
  BaseUrlReport + "/sinister/legalUser-electronic-theft";

export const addReportLegalElectronicTheft = async (
  url: string,
  { arg }: { arg: LegalElectronicTheftType }
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
