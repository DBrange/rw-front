export interface VehicleCrashReportData {
  time: string;
  date: Date;
  location: string;
  details: string;
  injured: boolean;
  injures: string;
  ambulance: boolean;
  ambulanceTo: string;
  thridInjured: boolean;
  thridParty?: ThridParty;
}

export interface VehicleTheftReportData {
  time: string;
  date: Date;
  location: string;
  reportPhoto: string;
}

export interface VehicleFireReportData {
  time: string;
  date: Date;
  location: string;
  detail: string;
  thridParty?: ThridParty;
}

export interface ThridParty {
  amount: number;
  injuredInfo: InjuredInfo[]
}

export interface InjuredInfo{
  name: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  gender: 'HOMBRE' | 'MUJER' | 'OTRO'
  dni: number;
  injuries: string;
}