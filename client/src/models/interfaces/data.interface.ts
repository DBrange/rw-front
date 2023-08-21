export interface PersonalData {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  altEmail?: string;
  gender: "HOMBRE" | "MUJER" | "OTRO";
  dni: number;
  address: string;
}

export interface LegalPersonalData {
  companyName: string;
  cuit: number;
  phoneNumber: string;
  email: string;
  altEmail?: string;
  address: string;
}

export interface VehicleData extends PersonalData {
  year: number;
  color: string;
  tireBrand: string;
  tireSize: string;
  tireWear: string;
  damage: boolean;
  damageLocation?: string;
  images: string;
  plate: string;
  gnc: boolean;
  brand: string;
  model: string;
  fuel: "DIESEL" | "GASOLINA";
  type: "CAMIONETA" | "AUTOMOVIL" | "MOTOCICLETA";
}
export interface LegalVehicleData extends LegalPersonalData {
  year: number;
  color: string;
  tireBrand: string;
  tireSize: string;
  tireWear: string;
  damage: boolean;
  damageLocation?: string;
  images: string;
  plate: string;
  gnc: boolean;
  brand: any;
  model: any;
  fuel: "DIESEL" | "GASOLINA";
  type: "CAMIONETA" | "AUTOMOVIL" | "MOTOCICLETA";
}

export interface ElectronicData extends PersonalData {
  type: "CELULAR" | "TABLET" | "NOTEBOOK";
  phoneNumber: string;
  phoneService?: string;
  brand: string;
  model: string;
  imei: number;
}
export interface LegalElectronicData extends LegalPersonalData {
  type: "CELULAR" | "TABLET" | "NOTEBOOK";
  phoneNumber: string;
  phoneService?: string;
  brand: string;
  model: string;
  imei: number;
}
