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

export interface AllClientSinisters {
  id: string;
  creater_at: string;
  updated_at: string;
  time: string;
  date: string;
  location: string;
  asset: AllClientAssets;
}

export interface AssetDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  users: UsersDetail | null;
  legalUsers: LegalUserDetail | null;
  vehicle: VehicleDetail | null;
  electronics: ElectronicDetail | null;
}

interface VehicleDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  year: number;
  color: string;
  brand: string;
  model: string;
  tireBrand: string;
  tireSize: string;
  tireWear: number;
  damage: boolean;
  damageLocation: string;
  images: string[];
  plate: string;
  explodedAirbag: string
  noSpareTire: string
  gnc: boolean;
  fuel: string;
  type: string;
  okm: boolean;
}

interface UsersDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  name: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  gender: string;
  dni: string;
  address: string;
  role: string;
  accessLevel: number;
  authorization: string;
}

interface LegalUserDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  companyName: string;
  cuit: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string;
  role: string;
}

interface ElectronicDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  type: string;
  brand: string;
  model: string;
}

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
