import { baseUrl, AllBrokerClients } from "@/pages";

export const AllBrokersUrl = (
  id?: string,
  searchField?: string,
  typeToFilter?: string,
  page?: number,
  limit?: number
) =>
  baseUrl +
  `/user/brokers/${id}?searchField=${searchField}&typeToFilter=${typeToFilter}&page=${page}&limit=${limit}`;

export const allBrokers = async (
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
