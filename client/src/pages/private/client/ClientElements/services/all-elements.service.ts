import { AllClientAssets, baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";

export const AllElementsUrl = (id?: string) =>
  baseUrl + `/asset/client-elements/${id}`;


export const allElements = async (
  url: string
): Promise<AllClientAssets[] | [] | undefined> => {
  try {
    return fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        rw_token: accessToken as string,
      },
    }).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
