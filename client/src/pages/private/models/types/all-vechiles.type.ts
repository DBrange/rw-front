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
  gncId: GncDetail
}
interface GncDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  expireDate: string;
  oblea: string;
  plate: string;
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
  smartphones: SmartphonesDetail;
}

interface SmartphonesDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  imei: string;
  phoneNumber: string;
  phoneService: string;
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

//-------

export interface SinisterDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  time: string;
  date: string;
  location: string;
  asset: AssetDetail;
  injuredd: Injuredd[];
  thirdPartyVehicle: ThirdPartyVehicle[];
  sinisterType: SinisterType;
}

interface SinisterType {
  id: string;
  creater_at: string;
  updated_at: string;
  theft?: Theft;
  fire?: Fire;
  crash?: Crash;
}



interface ThirdPartyVehicle {
  id: string;
  creater_at: string;
  updated_at: string;
  brand: string;
  model: string;
  year: number;
  plate: string;
  insuranceCompany: string;
  insurancePolicy: string;
  ownerName: string;
  ownerLastName: string;
  ownerDni: string;
  thirdPartyDriver: ThirdPartyDriver
}

export interface Injuredd {
  id: string;
  creater_at: string;
  updated_at: string;
  amount: number;
  injuredsInfo: InjuredsInfo[];
}

interface InjuredsInfo {
  id: string;
  creater_at: string;
  updated_at: string;
  name: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  gender: string;
  dni: string;
  injuries: string;
}

export interface Crash {
  id: string;
  creater_at: string;
  updated_at: string;
  time: string;
  date: string;
  location: string;
  details: string;
  injured: boolean;
  injuries: string;
  ambulance: boolean;
  ambulanceTo: string;
  thirdInjured: boolean;
  friendlyStatement: boolean;
}

export interface Fire {
  id: string;
  creater_at: string;
  updated_at: string;
  time: string;
  date: string;
  location: string;
  details: string;
  injured: boolean;
  injuries: string;
  ambulance: boolean;
  ambulanceTo: string;
  thirdInjured: boolean;
}


interface Theft {
  id: string;
  creater_at: string;
  updated_at: string;
  time: string;
  date: string;
  location: string;
  reportPhoto: string[];
  isTire: boolean;
  theftTire?: TheftTire;
}

interface TheftTire {
  tireAmount: number;
  tireWear: number;
  tirePhoto: string[];
  replacementLocation: string;
}

interface ThirdPartyDriver {
  id: string;
  creater_at: string;
  updated_at: string;
  name: string;
  lastName: string;
  dni: string;
  address: string;
  phoneNumber: string;
  licensePhoto: string[];
  email: string;
}