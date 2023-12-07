import { loaderImageService, modalSentService } from "@/services/sharing-information.service";
import { InputValues } from "..";

export const baseUrl = "http://localhost:3001/v1";
export const authUrl = `${baseUrl}/auth`
export const loginUrl = `${authUrl}/login`;

// export async function loginClient(url: string, { arg }: { arg: InputValues }) {
//   return fetch(url, {
//     method: "POST",
//     body: JSON.stringify(arg),
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

export const loginClient = async (
  url: string,
  { arg }: { arg: InputValues }
): Promise<Response | void> => {
  try {
    loaderImageService.setSubject(true);
    // modalSentService.setSubject(false);
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
    throw err;
  }
};

