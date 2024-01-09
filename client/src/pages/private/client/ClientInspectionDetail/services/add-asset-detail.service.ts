import { AssetDetail, baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";


export const detailAssetUrl = (id?: string) =>
  `${baseUrl}/asset/${id}`;


export const inspectedDetail = async (
  url: string
): Promise<AssetDetail> => {
  try {
    return fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        rw_token: accessToken as string,
      },
    }).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
