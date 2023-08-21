import axios from "axios";
import { VehicleInfo } from "../models";

export const fetchVehicleInfo = async (plateNumber: string): Promise<VehicleInfo | undefined> => {
  const username = "didirf5";
  const url = `https://www.regcheck.org.uk/api/reg.asmx/CheckArgentina?RegistrationNumber=${plateNumber}&username=${username}`;

  try {
    const response = await axios.get(url);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, "text/xml");

    // const description = xmlDoc.querySelector("Description")?.textContent;
    const brand = xmlDoc.querySelector("CarMake CurrentTextValue")?.textContent;
    const model = xmlDoc.querySelector("CarModel")?.textContent;
    const year = xmlDoc.querySelector("RegistrationYear")?.textContent;

    if (brand && model && year) {
      
      return {
        brand,
        model,
        year,
      };
    } 
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
