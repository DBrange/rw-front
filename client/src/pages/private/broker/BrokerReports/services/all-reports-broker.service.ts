import { AllClientSinisters, SinisterUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";

export const AllBrokerUserSinisterUrl = (
  id?: string,
  searchField?: string,
  typeToFilter?: string,
  typeToFilterReport?: string,
  page?: number,
  limit?: number
) =>
  `${SinisterUrl}/broker/${id}?searchField=${searchField}&typeToFilter=${typeToFilter}&typeToFilterReport=${typeToFilterReport ? typeToFilterReport : ''}&page=${page}&limit=${limit}`;

export const allBrokerSinister = async (
  url: string
): Promise<AllClientSinisters[]> => {
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
