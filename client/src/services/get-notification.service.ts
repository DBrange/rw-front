

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
