import {
  loaderImageService,
  modalSuccessfulRegistration,
} from "@/services/sharing-information.service";
import { RegisterUser } from "..";
import { baseUrl } from "@/pages";

export const registerUrl = `${baseUrl}/register`;

export const addUser = async (
  url: string,
  { arg }: { arg: RegisterUser }
): Promise<Response | void> => {
  try {
    loaderImageService.setSubject(true);
    modalSuccessfulRegistration.setSubject(false);
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
    modalSuccessfulRegistration.setSubject(true);
    
    return await response.json();
  } catch (err) {
    loaderImageService.setSubject(false);
    throw err;
  }
};
