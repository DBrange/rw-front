import { AllClientVehicles } from "../..";

export const BaseUrlInspect = "http://localhost:3000";
export const AllVehiclesUrl = BaseUrlInspect + "/vehicle";

export const allInspectedVehicles = async (
  url: string
): Promise<AllClientVehicles[]> => {
  try {
    return fetch(url).then((res) => res.json());

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }
  } catch (err) {
    throw err;
  }
};
