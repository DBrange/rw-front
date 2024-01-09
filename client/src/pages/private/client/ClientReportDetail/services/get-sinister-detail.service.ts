import { SinisterDetail, baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";


export const detailSinisterUrl = (id?: string) => `${baseUrl}/sinister/${id}`;

export const sinisterDetail = async (url: string): Promise<SinisterDetail> => {
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
