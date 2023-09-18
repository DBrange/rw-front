export interface ThirdPartyInjuredValues {
  name:string;
  lastName:string;
  location:string;
  birthDate:string;
  phoneNumber:string;
  email:string;
  gender: "default" | "HOMBRE" | "MUJER" | "OTRO";
  dni:string;
  injuries:string;
}

export interface ErrorsThirdPartyInjuredValues {
  name:string;
  lastName:string;
  location:string;
  birthDate:string;
  phoneNumber:string;
  email:string;
  gender: string;
  dni:string;
  injuries:string;
}

export interface TouchedThirdPartyInjuredValues {
  name:boolean;
  lastName:boolean;
  location:boolean;
  birthDate:boolean;
  phoneNumber:boolean;
  email:boolean;
  gender: boolean;
  dni:boolean;
  injuries:boolean;
}