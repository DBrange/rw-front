export interface FireVehicleValues{
  time: string;
  date: string;
  location: string;
  details: string;
  injured: boolean;
  injuries: string;
  ambulance: boolean;
  ambulanceTo: string;
  thirdInjured: boolean
  amount: number
}

export interface ErrorsFireVehicleValues{
  time: string;
  date: string;
  location: string;
  details: string;
  amount: string
}

export interface TouchedFireVehicleValues{
  time: boolean;
  date: boolean;
  location: boolean;
  details: boolean;
  ambulanceTo: boolean;
  amount: boolean
}