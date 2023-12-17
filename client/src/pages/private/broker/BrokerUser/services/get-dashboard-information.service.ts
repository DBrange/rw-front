import { baseUrl } from "@/pages";
import { DashboardInfo } from "../interfaces/dashboard.interface";
import { Notification } from "@/models";

export const DashBoardInfoUrl = (brokerId?: string, userBrokerId?: string) =>
  baseUrl + `/sinister/dashboard/${brokerId}/${userBrokerId}`;

export const getDashBoardInfo = async (
  url: string
): Promise<DashboardInfo | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};


export const getNotificationsUrl = (userId?: string) =>
  baseUrl + `/user/notifications/${userId}`;

export const getNotifications = async (
  url: string
): Promise<Notification[] | []> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
