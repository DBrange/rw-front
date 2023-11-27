import { AllBrokerClients, baseUrl } from "@/pages";

export const AllBrokerClientsForCreateSinisterUrl = (id?: string) =>
  baseUrl + `/users/broker-clients/${id}`;

export const allBrokerClientsForCreateSinister = async (
  url: string
): Promise<AllBrokerClients[] | [] | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};

// export const createAssetInClientUserBrokerUrl = (id?: string) =>
//   `${baseUrl}/asset/in-user/${id}`;

// export const createAssetInClientUserBroker = async (
//   url: string,
//   { arg }: { arg: CreateInspectionValues }
// ): Promise<Response | void> => {
//   try {
//     loaderImageService.setSubject(true);
//     modalSentService.setSubject(false);
//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(arg),
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }

//     loaderImageService.setSubject(false);
//     modalSentService.setSubject(true);
//   } catch (err) {
//     throw err;
//   }
// };



