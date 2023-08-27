import {
  LegalElectronicTheftType,
  LegalPersonalVehicleFireType,
  LegalPersonalVehicleTheftType,
  LegalVehicleCrashType,
  PersonalElectronicTheftType,
  PersonalVehicleCrashType,
  PersonalVehicleFireType,
  PersonalVehicleTheftType,
} from "../models/types";

export const BaseUrl = "http://localhost:3001/v1";

export const PersonalVehicleCrashUrl = BaseUrl + "/sinister/user-vehicle-crash";

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

export const PersonalVehicleTheftUrl = BaseUrl + "/sinister/user-vehicle-theft";

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

export const PersonalVehicleFireUrl = BaseUrl + "/sinister/user-vehicle-fire";

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

export const LegalPersonalVehicleCrashUrl = BaseUrl + "/sinister/legalUser-vehicle-crash";

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

export const LegalPersonalVehicleTheftUrl =
  BaseUrl + "/sinister/legalUser-vehicle-theft";

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

export const LegalPersonalVehicleFireUrl =
  BaseUrl + "/sinister/legalUser-vehicle-fire";

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

export const PersonalElectronicTheftUrl = BaseUrl + "/sinister/user-electronic-theft";

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

export const LegalPersonalElectronicTheftUrl =
  BaseUrl + "/sinister/legalUser-electronic-theft";

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
