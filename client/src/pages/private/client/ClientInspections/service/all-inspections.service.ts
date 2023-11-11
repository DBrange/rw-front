import { AllClientAssets } from "@/pages";

export const BaseUrlInspect = "http://localhost:3001/v1";
export const AllAssetsUserUrl = (id?: string) =>
  BaseUrlInspect + `/asset/user-login/${id}`;
export const AllAssetsLegalUserUrl = (id?: string) =>
  BaseUrlInspect + `/asset/legal-user-login/${id}`;

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
