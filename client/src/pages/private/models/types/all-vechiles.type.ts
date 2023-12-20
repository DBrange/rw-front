import { FUEL, VEHICLE_TYPE } from "@/models";
import { User } from "@/models/interfaces/userInfo/userInfo.interface";

export interface ClientDetailInBroker extends Omit<User, "broker" | "userBroker"> {
  assets: AllClientAssets[];
  sinisters: AllClientSinisters[];
}

export interface AllClientAssets {
  id: string;
  created_at: Date;
  updated_at: Date;
  insured: boolean;
  inspection: boolean;
  vehicle: Vehicle | null;
  electronic: Electronic | null;
}
export interface Vehicle {
  id: string
  brand: string;
  model: string;
  plate: string;
  type: string;
}

export interface Electronic {
  id: string
  type: string;
  brand: string;
  model: string;
  smartphone: IImei
}

interface IImei{
  imei: string
}

export interface AllClientProfileSinisters {
  id: string;
  created_at: Date;
  updated_at: Date;
  insured: false;
  inspection: false;
  vehicle: Vehicle | null;
  electronic: Electronic | null;
  // time: string;
  // date: string;
  // location: string;
  // asset: AllClientAssets;
}
export interface AllClientSinisters {
  id: string;
  created_at: Date;
  updated_at: Date;
  time: string;
  date: string;
  location: string;
  sinisterType: SinisterTypeAllClientSinister;
  asset: AllClientAssets;
}

export interface SinisterTypeAllClientSinister {
  id: string;
  created_at: Date;
  updated_at: Date;
  theft: string | null;
  fire: string | null;
  crash: string | null;
  damage: string | null;
}

export interface AssetDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
  time: string;
  date: string;
  location: string;
}

interface VehicleDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
  expireDate: string;
  oblea: string;
  plate: string;
}

export interface UserDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
  name: string;
  lastName: string;
  birthDate: string;
  gender: string;
  dni: string;
}

export interface LegalUserDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
  companyName: string;
  cuit: string;
}

interface ElectronicDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
  type: string;
  brand: string;
  model: string;
  smartphone: SmartphonesDetail;
}

interface SmartphonesDetail {
  id: string;
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
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
  reportPhoto: string[];
  budget: string;
}

interface ThirdPartyVehicle {
  id: string;
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
  amount: number;
  injuredsInfo: InjuredsInfo[];
}

interface InjuredsInfo {
  id: string;
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
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
  created_at: Date;
  updated_at: Date;
  name: string;
  lastName: string;
  dni: string;
  address: string;
  phoneNumber: string;
  licensePhoto: string[];
  email: string;
}
