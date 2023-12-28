import { AllUsers, baseUrl } from "@/pages";

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
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
