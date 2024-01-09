import { baseUrl } from "@/pages";
import { loaderImageService, modalSentService, modalEditPassword, modalEditPasswordError, modalToast, modalToastError } from "@/services/sharing-information.service";
import { NewPassword } from "..";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";


export const UpdatePasswordtUrl = (userId?: string) =>
  `${baseUrl}/user/password/${userId}`;

export const updatePassword = async (
  url: string,
  { arg }: { arg: NewPassword }
): Promise<Response | void> => {
  try {
    loaderImageService.setSubject(true);
    modalSentService.setSubject(false);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arg),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        rw_token: accessToken as string,
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    loaderImageService.setSubject(false);
    modalSentService.setSubject(true);
    modalEditPassword.setSubject(false);
    modalEditPasswordError.setSubject(false);
    modalToast.setSubject(true)
  } catch (err) {
    modalEditPasswordError.setSubject(true);
    modalToastError.setSubject(true)
    throw err;
  }
};
