import {
  loaderImageService,
  modalSentService,
} from "@/services/sharing-information.service";
import { RegisterUser } from "..";

export const baseUrl = "http://localhost:3001/v1";
export const usersUrl = `${baseUrl}/users`;
export const registerUrl = `${usersUrl}/register-login`;

export const addUser = async (
  url: string,
  { arg }: { arg: RegisterUser }
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
    
    return await response.json();
  } catch (err) {
    console.log(err)
    throw err;
  }
};



