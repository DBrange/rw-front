import { AllBrokerClients, baseUrl } from "@/pages";

export const AllBrokerClientsUrl = (id?: string) =>
  baseUrl + `/asset/broker-clients/${id}`;

export const allBrokerClients = async (
  url: string
): Promise<AllBrokerClients[] | [] | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
