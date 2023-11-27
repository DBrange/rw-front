import { AllClientAssets, baseUrl } from "@/pages";

export const AllAssetsUserUrl = (id?: string) =>
  baseUrl + `/asset/user-login/${id}`;
export const AllAssetsLegalUserUrl = (id?: string) =>
  baseUrl + `/asset/legal-user-login/${id}`;

export const allInspected = async (
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
