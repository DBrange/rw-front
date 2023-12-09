export interface UserActive {
  personal: boolean;
  legalPersonal: boolean;
}

export interface IUserType {
  client: boolean;
  broker: boolean;
}

export interface ElementActive {
  vehicle: boolean;
  electronic: boolean;
}
export interface ElementReportActive {
  vehicleReport: boolean;
  electronic: boolean;
}
export interface ReportActive {
  theft: boolean;
  fire: boolean;
  crash: boolean;
  damage: boolean
}
