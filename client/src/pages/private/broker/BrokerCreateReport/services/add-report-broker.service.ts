

import { AllBrokerClients, baseUrl } from "@/pages";

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
    return fetch(url).then((res) => {
      return res.json();
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};