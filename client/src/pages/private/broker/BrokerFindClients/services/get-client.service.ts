import { AllBrokerClients, baseUrl } from "@/pages";

export const getClientUrl = (id?: string) =>
  baseUrl + `/user/client/${id}`;

export const getClient = async (
  url: string
): Promise<AllBrokerClients | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
