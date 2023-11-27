import { AssetDetail, baseUrl } from "@/pages";


export const detailAssetUrl = (id?: string) =>
  `${baseUrl}/asset/${id}`;


export const inspectedDetail = async (
  url: string
): Promise<AssetDetail> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
