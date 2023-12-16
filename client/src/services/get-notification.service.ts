import { baseUrl } from "@/pages";
import { loaderImageService } from "./sharing-information.service";
import { Notification } from "@/models";

export const getNotificationsUrl = (userId?: string) =>
  baseUrl + `/user/notifications/${userId}`;

  export const getNotifications = async (
    url: string
  ): Promise<Notification[] | []> => {
    try {
      return fetch(url).then((res) => res.json());

      // if (!response.ok) {
      //   throw new Error(`Request failed with status: ${response.status}`);
      // }
    } catch (err) {
      throw err;
    }
  };
// export const getNotifications = async (
//   url: string
// ): Promise<Notification[] | []> => {
//   try {
//     loaderImageService.setSubject(true);
//     // modalSentService.setSubject(false);
//     const response = await fetch(url, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       loaderImageService.setSubject(false);
//       throw new Error(`Request failed with status: ${response.status}`);
//     } else {
//     }

//     loaderImageService.setSubject(false);
//     // modalSentService.setSubject(true);

//     return await response.json();

//     // localStorage.setItem("client", JSON.stringify(res));
//   } catch (err) {
//     throw err;
//   }
// };
