import { AllBrokerClients, ClientByEmail, baseUrl } from "@/pages";
import { loaderImageService } from "@/services/sharing-information.service";

export const sendNotificationUrl = () => baseUrl + `/user-in-broker`;

export const sendNotification = async (
  url: string,
  { arg }: { arg: any }
): Promise<Response | void> => {
  try {
    loaderImageService.setSubject(true);
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
  } catch (err) {
    throw err;
  }
};

export const getClientForEmailUrl = (email?: string) =>
  baseUrl + `/user/email/${email}`;

export const getClientForEmail = async (
  url: string
): Promise<ClientByEmail | void> => {
  try {
    loaderImageService.setSubject(true);
    // modalSentService.setSubject(false);
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      loaderImageService.setSubject(false);
      throw new Error(`Request failed with status: ${response.status}`);
    } else {
    }

    loaderImageService.setSubject(false);
    // modalSentService.setSubject(true);

    return await response.json();

    // localStorage.setItem("client", JSON.stringify(res));
  } catch (err) {
    throw err;
  }
};
