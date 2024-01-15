import { baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";

export const InspectionQuantityLinkUrl = (id?: string) =>
  baseUrl + `/asset/inspections-client-quantity/${id}`;

export const inspectionQuantityLink = async (
  url: string
): Promise<{ quantity: number }> => {
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
