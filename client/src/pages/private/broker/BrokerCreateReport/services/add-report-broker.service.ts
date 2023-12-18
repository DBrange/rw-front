

import { AllBrokerClients, baseUrl } from "@/pages";

export const AllBrokerClientsForCreateSinisterUrl = (id?: string) =>
  baseUrl + `/asset/broker-clients/${id}`;

export const allBrokerClientsForCreateSinister = async (
  url: string
): Promise<AllBrokerClients[] | [] | undefined> => {
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