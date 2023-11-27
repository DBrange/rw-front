import {  AllClientSinisters, SinisterUrl, baseUrl } from "@/pages";


export const AllBrokerUserSinisterUrl = (id?: string) =>
  `${SinisterUrl}/broker-sinisters-users/${id}`;

export const AllBrokerLegalUserSinisterUrl = (id?: string) =>
  `${SinisterUrl}/broker-sinisters-legal-users/${id}`;

export const allBrokerSinister = async (
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
