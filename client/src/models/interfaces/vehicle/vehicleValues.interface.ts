export interface VehicleValues {
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
  explodedAirbag: boolean
  noSpareTire: boolean
  gnc: boolean;
  fuel: "default" | "DIESEL" | "GASOLINA";
  type: "default" | "CAMIONETA" | "AUTOMOVIL" | "MOTOCICLETA";
}

export interface ErrorsVehicleValues {
  plate: string;
  year: string;
  brand: string;
  model: string;
  color: string;
  tireBrand: string;
  tireSize: string;
  tireWear: string;
  images: string;
  fuel: string;
  type: string;
}

export interface TouchedVehicleValues {
  plate: boolean;
  year: boolean;
  brand: boolean;
  model: boolean;
  color: boolean;
  tireBrand: boolean;
  tireSize: boolean;
  tireWear: boolean;
  images: boolean;
  fuel: boolean;
  type: boolean;
}
