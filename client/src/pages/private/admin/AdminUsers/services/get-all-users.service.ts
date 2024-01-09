import { AllUsers, baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";

export const AllUsersUrl = (
  searchField?: string,
  typeToFilter?: string,
  typeToFilterUser?: string,
  page?: number,
  limit?: number
) =>
  baseUrl +
  `/user/admin?searchField=${searchField}&typeToFilter=${typeToFilter}&typeToFilterUser=${typeToFilterUser}&page=${page}&limit=${limit}`;

export const allUsers = async (
  url: string
): Promise<AllUsers[]> => {
  try {
    return fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        rw_token: accessToken as string,
      },
    }).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
