import { ClientDetailInBroker, baseUrl } from "@/pages";

// export const BaseUrlInspect = "http://localhost:3001/v1";
// export const AllBrokerAssetsUserUrl = (id?: string) =>
//   BaseUrlInspect + `/asset/broker-assets-users/${id}`;
// export const AllBrokerAssetsLegalUserUrl = (id?: string) =>
//   BaseUrlInspect + `/asset/broker-assets-legal-users/${id}`;

export const clientDetailUrl = (brokerId?: string, clientId?: string) =>
  `${baseUrl}/sinister/client-detail/${brokerId}/${clientId}`;

export const clientDetail = async (
  url: string
): Promise<ClientDetailInBroker | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};






