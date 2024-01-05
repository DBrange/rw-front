import { loaderImageService, modalSentService } from "@/services/sharing-information.service";
import { InputValues } from "..";
import { ClientInfo } from "@/models";

export const baseUrl = "http://localhost:3001/v1";
export const authUrl = `${baseUrl}/auth`
export const loginUrl = `${authUrl}/login`;

export const loginClient = async (
  url: string,
  { arg }: { arg: InputValues }
): Promise<ClientInfo | void> => {
  try {
    loaderImageService.setSubject(true);
    // mogetinsdalSentService.setSubject(false);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
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
    loaderImageService.setSubject(false);
    throw err;
  }
};

export const loginGoogleUrl = `${authUrl}/google-login`;

export const loginGoogle = async (url: string): Promise<ClientInfo> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
