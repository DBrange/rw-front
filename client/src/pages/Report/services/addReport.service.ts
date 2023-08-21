import { LegalElectronicTheftType, LegalPersonalVehicleFireType, LegalPersonalVehicleTheftType, LegalVehicleCrashType, PersonalElectronicTheftType, PersonalVehicleCrashType, PersonalVehicleFireType, PersonalVehicleTheftType } from "../types";

export const BaseUrl = "http://localhost:3001/v1";

export const PersonalVehicleCrashUrl = BaseUrl + "";

export const addReportPersonalVehicleCrash = async (
  url: string,
  { arg }: { arg: PersonalVehicleCrashType }
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

export const PersonalVehicleTheftUrl = BaseUrl + "";

export const addReportPersonalVehicleTheft = async (
  url: string,
  { arg }: { arg: PersonalVehicleTheftType }
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

export const PersonalVehicleFireUrl = BaseUrl + "";

export const addReportPersonalVehicleFire = async (
  url: string,
  { arg }: { arg: PersonalVehicleFireType }
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

export const LegalVehicleCrashUrl = BaseUrl + "";

export const addReportLegalVehicleCrash = async (
  url: string,
  { arg }: { arg: LegalVehicleCrashType }
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

export const LegalPersonalVehicleTheftUrl = BaseUrl + "";

export const addReportLegalPersonalVehicleTheft = async (
  url: string,
  { arg }: { arg: LegalPersonalVehicleTheftType }
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

export const LegalPersonalVehicleFireUrl = BaseUrl + "";

export const addReportLegalPersonalVehicleFire = async (
  url: string,
  { arg }: { arg: LegalPersonalVehicleFireType }
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

export const PersonalElectronicTheftUrl = BaseUrl + "";

export const addReportPersonalElectronicTheft = async (
  url: string,
  { arg }: { arg: PersonalElectronicTheftType }
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

export const LegalElectronicTheftUrl = BaseUrl + "";

export const addReportLegalElectronicTheft = async (
  url: string,
  { arg }: { arg: LegalElectronicTheftType }
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
