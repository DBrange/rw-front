import { ClientInfo, Notification } from "@/models";
import { clientKey } from "@/redux/slices/clientSlice";

export const persistLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};


export const notificationsPersistLocalStorage = (key: string, value: Notification[]) => {
  const client: ClientInfo = JSON.parse(localStorage.getItem(clientKey) as string);

  if (client.user?.receivedNotifications) {
    client.user.receivedNotifications = value
    localStorage.setItem(key, JSON.stringify(client));
  }
};

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
