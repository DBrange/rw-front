export interface ThirdPartyVehicleValues {
  year: number;
  brand: string
  model:string
  plate:string
  insuranceCompany:string
  insurancePolicy:string
  ownerName:string
  ownerLastName:string
  ownerDni:string
  address:string
  phoneNumber:string
  licensePhoto:string[]
  email:string
  owner:boolean
  name:string
  lastName:string
  dni:string
}

export interface ErrorsThirdPartyVehicleValues {
  year: string;
  brand: string
  model:string
  plate:string
  insuranceCompany:string
  insurancePolicy:string
  ownerName:string
  ownerLastName:string
  ownerDni:string
  address:string
  phoneNumber:string
  licensePhoto:string
  email:string
  name:string
  lastName:string
  dni:string
}
export interface TouchedThirdPartyVehicleValues {
  year: boolean;
  brand: boolean
  model:boolean
  plate:boolean
  insuranceCompany:boolean
  insurancePolicy:boolean
  ownerName:boolean
  ownerLastName:boolean
  ownerDni:boolean
  address:boolean
  phoneNumber:boolean
  licensePhoto:boolean
  email:boolean
  name:boolean
  lastName:boolean
  dni:boolean
}