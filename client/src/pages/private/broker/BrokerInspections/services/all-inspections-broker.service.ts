import { AllClientAssets, baseUrl } from "@/pages";

export const AllBrokerAssetsUserUrl = (id?: string) =>
  baseUrl + `/asset/inspections-client/${id}`;

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
