import { FUEL, VEHICLE_TYPE } from "@/models";

export interface AllClientVehicles {
  id: number;
  plate: string;
  year: number;
  brand: string;
  model: string;
  color: string;
  tireBrand: string;
  tireSize: string;
  tireWear: number;
  damage: boolean;
  damageLocation: string;
  images: string[];
  okm: boolean;
  explodedAirbag: boolean;
  noSpareTire: boolean;
  gnc: boolean;
  fuel: FUEL;
  type: VEHICLE_TYPE;
  oblea: string;
  expireDate: string;
}