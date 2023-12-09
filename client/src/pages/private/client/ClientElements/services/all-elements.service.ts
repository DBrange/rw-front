import { AllClientAssets, baseUrl } from "@/pages";

export const AllElementsUrl = (id?: string) =>
  baseUrl + `/asset/client-elements/${id}`;


export const allElements = async (
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
