import { AllBrokerClients, baseUrl } from "@/pages";

export const AllBrokerClientsForCreateInspectionUrl = (id?: string) =>
  baseUrl + `/asset/broker-clients/${id}`;

export const allBrokerClientsForCreateInspection = async (
  url: string
): Promise<AllBrokerClients[] | [] | undefined> => {
  try {
    return fetch(url).then((res) => {
      return res.json();
    });

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



