import { Notification } from "@/models";
import { baseUrl } from "@/pages";

export const AllNotificationsUrl = (
  userId?: string,
  page?: number,
  limit?: number
) => `${baseUrl}/user/notifications/${userId}?page=${page}&limit=${limit}`;

export const allNotifications = async (
  url: string
): Promise<Notification[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
