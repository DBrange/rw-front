import { baseUrl, AllBrokerClients } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";

export const AllBrokerClientsUrl = (
  id?: string,
  searchField?: string,
  typeToFilter?: string,
  page?: number,
  limit?: number
) =>
  baseUrl +
  `/asset/broker-clients/${id}?searchField=${searchField}&typeToFilter=${typeToFilter}&page=${page}&limit=${limit}`;

export const allBrokerClients = async (
  url: string
): Promise<AllBrokerClients[]> => {
  try {
    return fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        rw_token: accessToken as string
      },
    }).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
