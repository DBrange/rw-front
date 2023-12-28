import { AllClientAssets, baseUrl } from "@/pages";

export const AllInspectionsUrl = (
  searchField?: string,
  typeToFilter?: string,
  page?: number,
  limit?: number
) =>
  baseUrl +
  `/asset/inspections?searchField=${searchField}&typeToFilter=${typeToFilter}&page=${page}&limit=${limit}`;

export const allInspections = async (
  url: string
): Promise<AllClientAssets[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
