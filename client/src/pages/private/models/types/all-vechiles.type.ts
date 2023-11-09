import { FUEL, VEHICLE_TYPE } from "@/models";

export interface AllClientAssets {
  id: string;
  creater_at: string;
  updated_at: string;
  vehicle: Vehicle | null;
  electronics: Electronics | null;
}
export interface Vehicle {
  brand: string;
  model: string;
  plate: string;
  type: string;
}

export interface Electronics {
  type: string;
  brand: string;
  model: string;
}

// export interface AllClientAssets {
//   id: number;
//   plate: string;
//   year: number;
//   brand: string;
//   model: string;
//   color: string;
//   tireBrand: string;
//   tireSize: string;
//   tireWear: number;
//   damage: boolean;
//   damageLocation: string;
//   images: string[];
//   okm: boolean;
//   explodedAirbag: boolean;
//   noSpareTire: boolean;
//   gnc: boolean;
//   fuel: FUEL;
//   type: VEHICLE_TYPE;
//   oblea: string;
//   expireDate: string;
// }
