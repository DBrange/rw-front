import { ELECTRONIC_TYPE } from "@/models";

export interface AllClientElectronics {
  type: ELECTRONIC_TYPE;
  brand: string;
  model: string;
  imei: string;
  phoneNumber: string;
  phoneService: string;
}
