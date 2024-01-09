

import { AllBrokerClients, baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";

export const AllBrokerClientsForCreateSinisterUrl = (
  id?: string,
  searchField?: string,
  typeToFilter?: string,
  page?: number,
  limit?: number
) =>
  baseUrl +
  `/asset/broker-clients/${id}?searchField=${searchField}&typeToFilter=${typeToFilter}&page=${page}&limit=${limit}`;

export const allBrokerClientsForCreateSinister = async (
  url: string
): Promise<AllBrokerClients[]> => {
  try {
    return fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        rw_token: accessToken as string,
      },
    }).then((res) => {
      return res.json();
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};