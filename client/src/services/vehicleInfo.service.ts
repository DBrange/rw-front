import axios from "axios";

export const fetchVehicleInfo = async (plateNumber: string): Promise<any> => {
  const username = "didirf3";
  const url = `https://www.regcheck.org.uk/api/reg.asmx/CheckArgentina?RegistrationNumber=${plateNumber}&username=${username}`;

  try {
    const response = await axios.get(url);
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response.data, "text/xml");

    const description = xmlDoc.querySelector("Description")?.textContent;
    const carMake = xmlDoc.querySelector("CarMake CurrentTextValue")?.textContent;
    const carModel = xmlDoc.querySelector("CarModel")?.textContent;
    const year = xmlDoc.querySelector("RegistrationYear")?.textContent;

    if (description && carMake && carModel && year) {
      
      return {
        description,
        carMake,
        carModel,
        year,
      };
    } 
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
