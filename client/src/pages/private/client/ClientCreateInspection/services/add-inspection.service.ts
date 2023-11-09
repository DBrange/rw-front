import { CreateInspectionValues } from "@/models";
import { loaderImageService, modalSentService } from "@/services/sharing-information.service";

export const BaseUrl = "http://localhost:3001/v1";

export const createAssetInClientUserUrl = (id?: string) => `${BaseUrl}/asset/in-user/${id}`;

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
