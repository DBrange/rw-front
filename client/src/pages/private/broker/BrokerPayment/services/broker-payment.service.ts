import { baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";
import { loaderImageService } from "@/services/sharing-information.service";

export const CreatePreferenceUrl =
  "http://localhost:3001/v1/subscription/process_payment";

export const createPreference = async (
  url: string,
  { arg }: { arg: any }
): Promise<{id: string} | undefined> => {
  try {
    loaderImageService.setSubject(true);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        rw_token: accessToken as string,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    
    loaderImageService.setSubject(false);

    return await response.json()
  } catch (err) {
    console.log(err);
    throw err;
  }
};

