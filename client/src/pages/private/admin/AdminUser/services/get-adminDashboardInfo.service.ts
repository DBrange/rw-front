import { InfoGraphQuantity, InfoLineGraph, baseUrl } from "@/pages";

export const AdminDashBoardUserIncomeUrl = () =>
  baseUrl + `/user/admin/dashboard/income`;

export const adminDashBoardUserIncome = async (
  url: string
): Promise<InfoLineGraph[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};

export const AdminDashBoardNewUsersUrl = () =>
  baseUrl + `/user/admin/dashboard/new`;

export const adminDashBoardNewUsers = async (
  url: string
): Promise<InfoLineGraph[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};

export const AdminDashBoardRoleUrl = () => baseUrl + `/user/admin/dashboard/role`;

export const adminDashBoardRole = async (
  url: string
): Promise<InfoLineGraph[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};

export const AdminDashBoardLevelUrl = () => baseUrl + `/user/admin/dashboard/level`;

export const adminDashBoardLevel = async (
  url: string
): Promise<InfoLineGraph[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};

export const AdminDashBoardServicesUrl = () =>
  baseUrl + `/user/admin/dashboard/services`;

export const adminDashBoardServices = async (
  url: string
): Promise<InfoGraphQuantity[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};

export const AdminDashBoardUserQuantityUrl = () =>
  baseUrl + `/user/admin/dashboard/user-quantity`;

export const adminDashBoardUserQuantity = async (
  url: string
): Promise<InfoGraphQuantity[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};

export const AdminDashBoardDocumentsUrl = () =>
  baseUrl + `/sinister/admin/dashboard/documents`;

export const adminDashBoardDocuments = async (
  url: string
): Promise<InfoLineGraph[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
