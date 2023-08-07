import { SchemaElectronicType, SchemaLegalPersonalType, SchemaPersonalType, SchemaVehicleType } from "../../../models"

// type AddInspection =
//   | (SchemaPersonalType & SchemaVehicleType)
//   | (SchemaPersonalType & SchemaElectronicType)
//   | (SchemaLegalPersonalType & SchemaVehicleType)
//   | (SchemaLegalPersonalType & SchemaElectronicType);

export const baseUrlPersonalVehicle = "/aaaaaaaa";

 export const addInspectionPersonalVehicle = async (
   url: string,
   { arg }: { arg: SchemaPersonalType & SchemaVehicleType }
 ): Promise<Response> => {
   return fetch(url, {
     method: "POST",
     body: JSON.stringify(arg),
     credentials: "include",
     headers: {
       "Content-Type": "application/json",
     },
   });
 };

export const baseUrlPersonalElectronic = "/aaaaaaaa";

 export const addInspectionPersonalElectronic = async (
   url: string,
   { arg }: { arg: SchemaPersonalType & SchemaElectronicType }
 ): Promise<Response> => {
   return fetch(url, {
     method: "POST",
     body: JSON.stringify(arg),
     credentials: "include",
     headers: {
       "Content-Type": "application/json",
     },
   });
 };

export const baseUrlLegalVehicle = "/aaaaaaaa";

 export const addInspectionLegalVehicle = async (
   url: string,
   { arg }: { arg: SchemaLegalPersonalType & SchemaVehicleType }
 ): Promise<Response> => {
   return fetch(url, {
     method: "POST",
     body: JSON.stringify(arg),
     credentials: "include",
     headers: {
       "Content-Type": "application/json",
     },
   });
 };

export const baseUrlLegalElectronic = "/aaaaaaaa";

 export const addInspectionLegalElectronic = async (
   url: string,
   { arg }: { arg: SchemaLegalPersonalType & SchemaElectronicType }
 ): Promise<Response> => {
   return fetch(url, {
     method: "POST",
     body: JSON.stringify(arg),
     credentials: "include",
     headers: {
       "Content-Type": "application/json",
     },
   });
 };