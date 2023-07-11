interface PersonalData {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  altEmail?: string;
  gender: "hombre" | "mujer" | "otro";
  dni: number;
  address: string;
}

export interface VehicleData extends PersonalData{
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
  type: 'normal' | 'premium'
}

export interface ElectronicData extends PersonalData{
  type: 'celular' | 'tablet' | 'notebook'
  phoneNumber: number;
  phoneService: string;
  brand: any;
  model: any;
  IMEI: any;
}