import { FUEL, VEHICLE_TYPE } from "@/models";
import { User } from "@/models/interfaces/userInfo/userInfo.interface";

export interface ClientDetailInBroker
  extends Omit<User, "broker" | "userBroker" | "receivedNotifications"> {
  assets: AllClientAssets[];
  sinisters: AllClientSinisters[];
}

export interface AllClientAssets {
  id: string;
  creater_at: string;
  updated_at: string;
  vehicle: Vehicle | null;
  electronic: Electronic | null;
}
export interface Vehicle {
  brand: string;
  model: string;
  plate: string;
  type: string;
}

export interface Electronic {
  type: string;
  brand: string;
  model: string;
}

export interface AllClientSinisters {
  id: string;
  creater_at: string;
  updated_at: string;
  insured: false;
  inspection: false;
  vehicle: Vehicle | null;
  electronic: Electronic | null;
  // time: string;
  // date: string;
  // location: string;
  // asset: AllClientAssets;
}

export interface AssetDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  // user: UserDetail | null;
  vehicle: VehicleDetail | null;
  electronic: ElectronicDetail | null;
  insured: boolean;
  inspection: boolean;
  client: ClientDetail;
  sinisters: Sinister[];
}

interface ClientDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string;
  role: string;
  accessLevel: number;
  authorization: string;
  personalUser?: PersonalUserDetail;
  legalUser?: LegalUserDetail;
}

interface Sinister {
  id: string;
  creater_at: string;
  updated_at: string;
  time: string;
  date: string;
  location: string;
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
  explodedAirbag: string;
  noSpareTire: string;
  gnc: boolean;
  fuel: string;
  type: string;
  okm: boolean;
  gncId: GncDetail;
}
interface GncDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  expireDate: string;
  oblea: string;
  plate: string;
}

export interface UserDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  phoneNumber: string;
  email: string;
  altEmail: string;
  address: string;
  role: string;
  accessLevel: number;
  authorization: string;
}

export interface PersonalUserDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  dni: string;
}

export interface LegalUserDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  companyName: string;
  cuit: string;
}

interface ElectronicDetail {
  id: string;
  creater_at: string;
  updated_at: string;
  type: string;
  brand: string;
  model: string;
  smartphone: SmartphonesDetail;
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
  damage?: Damage;
}

interface Damage {
  time: string;
  date: string;
  location: string;
  details: string;
  reportPhoto: string;
  budget: string;
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
  thirdPartyDriver: ThirdPartyDriver;
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
