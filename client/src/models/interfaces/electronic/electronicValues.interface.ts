export interface ElectronicValues {
  type: 'default' |"CELULAR" | "TABLET" | "NOTEBOOK";
  brand: string;
  model: string;
}

export interface ErrorsElectronicValues {
  type: string;
  brand: string;
  model: string;
}

export interface TouchedElectronicValues {
  type: boolean;
  brand: boolean;
  model: boolean;
}
