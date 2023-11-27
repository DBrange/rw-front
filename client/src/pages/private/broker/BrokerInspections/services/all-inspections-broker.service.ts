import { AllClientAssets, baseUrl } from "@/pages";

export const AllBrokerAssetsUserUrl = (id?: string) =>
  baseUrl + `/asset/broker-assets-users/${id}`;
export const AllBrokerAssetsLegalUserUrl = (id?: string) =>
  baseUrl + `/asset/broker-assets-legal-users/${id}`;

export const allBrokerInspected = async (
  url: string
): Promise<AllClientAssets[] | [] | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
