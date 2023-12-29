import { baseUrl, BrokerDetailInBroker } from "@/pages";

export const BrokerDetailAdminUrl = (userId?: string) =>
  `${baseUrl}/sinister/broker-detail/${userId}`;

export const brokerDetailAdmin = async (
  url: string
): Promise<BrokerDetailInBroker | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
