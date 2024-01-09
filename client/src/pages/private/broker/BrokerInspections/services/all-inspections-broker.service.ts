import { AllClientAssets, baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";

export const AllBrokerAssetsUserUrl = (
  id?: string,
  searchField?: string,
  typeToFilter?: string,
  page?: number,
  limit?: number
) =>
  baseUrl +
  `/asset/inspections-client/${id}?searchField=${searchField}&typeToFilter=${typeToFilter}&page=${page}&limit=${limit}`;

export const allBrokerInspected = async (
  url: string
): Promise<AllClientAssets[]> => {
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
