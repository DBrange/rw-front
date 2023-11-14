import { SinisterDetail } from "@/pages";

export const BaseUrlInspectt = "http://localhost:3001/v1";

export const detailSinisterUrl = (id?: string) => `${BaseUrlInspectt}/sinister/${id}`;

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
