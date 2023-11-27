import { baseUrl } from "@/pages";
import {
  loaderImageService,
  modalSentService,
} from "@/services/sharing-information.service";

export const usersUrl = `${baseUrl}/users`;
export const verifyUserUrl = (
  email?: string,
  dni?: string,
  enrollment?: string
) => `${usersUrl}/verify?email=${email}&dni=${dni}&enrollment=${enrollment}`;

export const verifyUserInputs = async (
  url: string,
  // { arg }: { arg: any }
): Promise<boolean> => {
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
      // console.log(response)
      throw new Error(`Request failed with status: ${response.status}`);
    }

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
    
    return await response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const legalUsersUrl = `${baseUrl}/legal-users`;
export const verifyLegalUserUrl = (
  email?: string,
  cuit?: string,
  enrollment?: string
) =>
  `${legalUsersUrl}/verify?email=${email}&cuit=${cuit}&enrollment=${enrollment}`;

export const verifyLegalUserInputs = async (
  url: string,
  { arg }: { arg: null }
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
      // console.log(response)
      throw new Error(`Request failed with status: ${response.status}`);
    }

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
