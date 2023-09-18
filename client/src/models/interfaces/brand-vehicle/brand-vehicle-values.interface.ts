export interface TheftVehiclesValues {
  time: string;
  date: string;
  location: string;
  reportPhoto: string[];
  isTire: boolean;
}

export interface ErrorsTheftVehiclesValues {
  time: string;
  date: string;
  location: string;
  reportPhoto: string;
}

export interface TouchedTheftVehiclesValues {
  time: boolean;
  date: boolean;
  location: boolean;
  reportPhoto: boolean;
}
