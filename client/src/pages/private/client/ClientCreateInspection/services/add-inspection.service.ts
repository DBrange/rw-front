import { CreateInspectionValues } from "@/models";
import { baseUrl } from "@/pages";
import { loaderImageService, modalSentService } from "@/services/sharing-information.service";


export const createAssetInClientUserUrl = (id?: string) => `${baseUrl}/asset/in-user/${id}`;

export const createAssetInClientUser = async (
  url: string,
  { arg }: { arg: CreateInspectionValues }
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
      throw new Error(`Request failed with status: ${response.status}`);
    }

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
  } catch (err) {
    throw err;
  }
};
