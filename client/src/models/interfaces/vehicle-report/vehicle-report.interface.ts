export interface VehicleReportValues {
  year: string;
  color: string;
  damage: boolean;
  damageLocation: string;
  images: string[];
  plate: string;
  okm: boolean;
  gnc: boolean;
  brand: string;
  model: string;
  explodedAirbag: boolean;
  noSpareTire: boolean;
  fuel: "default" | "DIESEL" | "GASOLINA";
  type: "default" | "CAMIONETA" | "AUTOMOVIL" | "MOTOCICLETA";
}

export interface ErrorsVehicleReportValues {
  year: string;
  color: string;
  images: string;
  plate: string;
  brand: string;
  model: string;
  fuel: string;
  type: string;
}

export interface TouchedVehicleReportValues {
  year: boolean;
  color: boolean;
  images: boolean;
  plate: boolean;
  brand: boolean;
  model: boolean;
  fuel: boolean;
  type: boolean;
}