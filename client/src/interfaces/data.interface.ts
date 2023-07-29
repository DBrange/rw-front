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
  engine: string;
  model: string;
  fuel: "diesel" | "gasoline";
  vehicleType: "camion" | "automovil" | "motocicleta";
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
  engine: any;
  model: any;
  fuel: "diesel" | "gasoline";
  vehicleType: "camion" | "automovil" | "motocicleta";
}

export interface ElectronicData extends PersonalData {
  electronicType: "celular" | "tablet" | "notebook";
  phoneNumberCel?: number;
  phoneService?: string;
  brand: string;
  model: string;
  imei?: number;
}
export interface LegalElectronicData extends LegalPersonalData {
  electronicType: "celular" | "tablet" | "notebook";
  phoneNumberCel?: number;
  phoneService?: string;
  brand: string;
  model: string;
  imei?: number;
}

export interface AllDataInspect
  extends LegalElectronicData,
    ElectronicData,
    PersonalData,
    LegalPersonalData {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  altEmail?: string;
  gender: "hombre" | "mujer" | "otro";
  dni: number;
  address: string;
  companyName: string;
  cuit: number;
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
  engine: string;
  model: string;
  fuel: "diesel" | "gasoline";
  vehicleType: "camion" | "automovil" | "motocicleta";
  electronicType: "celular" | "tablet" | "notebook";
  phoneNumberCel?: number;
  phoneService?: string;
  imei?: number;
}
