export interface PersonalData {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  altEmail?: string;
  gender: "hombre" | "mujer" | "otro";
  dni: number;
  address: string;
}

export interface LegalPersonalData {
  companyName: string;
  cuit: number;
  phoneNumber: number;
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
  fuel: "DIESEL" | "GASOLINE";
  type: "CAMION" | "AUTOMOVIL" | "MOTOCICLETA";
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
  fuel: "DIESEL" | "GASOLINE";
  type: "CAMION" | "AUTOMOVIL" | "MOTOCICLETA";
}

export interface ElectronicData extends PersonalData {
  type: "celular" | "tablet" | "notebook";
  phoneNumberCel?: number;
  phoneService?: string;
  brand: string;
  model: string;
  imei?: number;
}
export interface LegalElectronicData extends LegalPersonalData {
  type: "celular" | "tablet" | "notebook";
  phoneNumberCel?: number;
  phoneService?: string;
  brand: string;
  model: string;
  imei?: number;
}
