import { AllClientVehicles } from "@/pages";

export const BaseUrlInspect = "http://localhost:3000";
export const AllVehiclesUrl = BaseUrlInspect + "/vehicles";

export const allReportsVehicles = async (
  url: string
): Promise<AllClientVehicles[] | [] | undefined> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
