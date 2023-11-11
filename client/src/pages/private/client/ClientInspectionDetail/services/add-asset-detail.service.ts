import { AssetDetail, BaseUrlInspect } from "@/pages";

export const BaseUrlInspectt = "http://localhost:3001/v1";

export const detailAssetUrl = (id?: string) =>
  `${BaseUrlInspectt}/asset/${id}`;


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
