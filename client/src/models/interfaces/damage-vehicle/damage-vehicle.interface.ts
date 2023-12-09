export interface DamageVehiclesValues {
  time: string;
  date: string;
  location: string;
  reportPhoto: string[];
  details: string;
  budget: string;
}

export interface ErrorsDamageVehiclesValues {
  time: string;
  date: string;
  location: string;
  reportPhoto: string;
  details: string;
  budget: string;
}

export interface TouchedDamageVehiclesValues {
  time: boolean;
  date: boolean;
  location: boolean;
  reportPhoto: boolean;
  details: boolean;
  budget: boolean;
}
