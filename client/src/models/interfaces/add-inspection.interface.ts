import { ElectronicValues, GncValues, PhoneValues } from '.';
import { VehicleValues } from './vehicle/vehicleValues.interface';

export interface CreateInspectionValues  {
  vehicleDTO: VehicleValues | null;
  gncDTO: GncValues | null;
  electronicDTO: ElectronicValues | null;
  smartphoneDTO: PhoneValues | null;
  swornDeclaration: boolean;
};
