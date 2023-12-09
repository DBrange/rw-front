import {
  DamageVehiclesValues,
  ErrorsDamageVehiclesValues,
  TouchedDamageVehiclesValues,
} from "..";

export interface DamageElectronicValues extends DamageVehiclesValues {}

export interface ErrorsDamageElectronicValues
  extends ErrorsDamageVehiclesValues {}

export interface TouchedDamageElectronicValues
  extends TouchedDamageVehiclesValues {}
