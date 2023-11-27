import { SinisterDetail, baseUrl } from "@/pages";


export const detailSinisterUrl = (id?: string) => `${baseUrl}/sinister/${id}`;

export const sinisterDetail = async (url: string): Promise<SinisterDetail> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
