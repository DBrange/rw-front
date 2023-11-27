import { AllClientSinisters } from "@/pages";
import {baseUrl} from '../../../../public/Login/services/getClient.service'

export const SinisterUrl = `${baseUrl}/sinister`

export const AllUserSinisterUrl = (id?: string) => `${SinisterUrl}/user-login/${id}`;

export const AllLegalUserSinisterUrl = (id?: string) =>
  `${SinisterUrl}/user-legal-login/${id}`;

export const allSinister = async (
  url: string
): Promise<AllClientSinisters[] | [] | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
