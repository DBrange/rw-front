import { AllClientSinisters } from "@/pages";
import {baseUrl} from '../../../../public/Login/services/getClient.service'

export const SinisterUrl = `${baseUrl}/sinister`

export const AllUserSinisterUrl = (
  id?: string,
  searchField?: string,
  typeToFilter?: string,
  typeToFilterReport?: string,
  page?: number,
  limit?: number
) =>
  `${SinisterUrl}/client/${id}?searchField=${searchField}&typeToFilter=${typeToFilter}&typeToFilterReport=${
    typeToFilterReport ? typeToFilterReport : ""
  }&page=${page}&limit=${limit}`;

export const allSinister = async (
  url: string
): Promise<AllClientSinisters[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
