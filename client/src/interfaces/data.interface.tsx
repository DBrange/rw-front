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
  tireZise: string;
  tireWear: string;
  damage: boolean;
  damageLocation: string;
  images: string;
  plate: string;
  gnc: boolean;
  brand: any;
  engine: any;
  model: any;
  fuel: 'diesel' | 'gasoline'
  vehicleType: 'camion' | 'automovil' | 'motocicleta'
}
export interface LegalVehicleData extends LegalPersonalData {
  year: number;
  color: string;
  tireBrand: string;
  tireZise: string;
  tireWear: string;
  damage: boolean;
  damageLocation: string;
  images: string;
  plate: string;
  gnc: boolean;
  brand: any;
  engine: any;
  model: any;
  fuel: 'diesel' | 'gasoline'
  vehicleType: 'camion' | 'automovil' | 'motocicleta'
}

export interface ElectronicData extends PersonalData {
  electronicType: "celular" | "tablet" | "notebook";
  phoneNumberCel: number;
  phoneService: string;
  brand: any;
  model: any;
  IMEI: any;
}