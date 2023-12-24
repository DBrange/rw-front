import {
  loaderImageService,
  modalSentService,
  modalToast,
  modalToastError,
} from "@/services/sharing-information.service";
import { baseUrl } from "../..";

export const FogottemPasswordUrl = (email?: string) =>
  `${baseUrl}/user/forgottem-password?email=${email}`;

export const forgottemPassword = async (
  url: string
): Promise<Response | void> => {
  try {
    loaderImageService.setSubject(true);
    modalSentService.setSubject(false);
    const response = await fetch(url, {
      method: "POST",
      // body: JSON.stringify(arg),
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
    modalToast.setSubject(true);
  } catch (err) {
    modalToastError.setSubject(true);
    loaderImageService.setSubject(false);
    throw err;
  }
};
