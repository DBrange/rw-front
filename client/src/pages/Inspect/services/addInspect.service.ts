import { SchemaElectronicType, SchemaLegalPersonalType, SchemaPersonalType, SchemaVehicleType } from "../../../models"

export const baseUrl = "http://localhost:3001/v1";

export const personalUrl = baseUrl + "/users/register";

 export const addInspectionPersonal = async (
   url: string,
   { arg }: { arg: SchemaPersonalType }
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

export const legalUrl = baseUrl + "/legal-users/create";

export const addInspectionLegal = async (
  url: string,
  { arg }: { arg: SchemaLegalPersonalType }
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
 
export const vehicleUrl = baseUrl + "/vehicle/create";

 export const addInspectionVehicle = async (
   url: string,
   { arg }: { arg: SchemaVehicleType }
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

export const electronicUrl = baseUrl + "/electronics/create";

 export const addInspectionElectronic = async (
   url: string,
   { arg }: { arg: SchemaElectronicType }
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

