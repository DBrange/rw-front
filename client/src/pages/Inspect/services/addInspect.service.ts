import {
  LegalElectronicType,
  PersonalElectronicType,
  PersonalVehicleType,
  LegalVehicleType,
} from "../../../models";

export const BaseUrl = "http://localhost:3001/v1";

export const PersonalVehicleUrl = BaseUrl + "/asset/user";

 export const addInspectionPersonalVehicle = async (
   url: string,
   { arg }: { arg: PersonalVehicleType }
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
 
export const PersonalElectronicUrl = BaseUrl + "/asset/electronicAsset";

export const addInspectionPersonalElectronic = async (
   url: string,
   { arg }: { arg: PersonalElectronicType }
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

export const LegalVehicleUrl = BaseUrl + "/asset/legalAsset";

 export const addInspectionLegalVehicle = async (
   url: string,
   { arg }: { arg: LegalVehicleType }
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

export const LegalElectronicUrl = BaseUrl + "/asset/electronicAssetL";

 export const addInspectionLegalElectronic = async (
   url: string,
   { arg }: { arg: LegalElectronicType }
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
 



