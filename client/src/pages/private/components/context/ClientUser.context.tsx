import { createContext, useState, useEffect, useContext } from "react";
import useSWR from "swr"; 
import {emptyClientUserContext} from './empty-clientUser-context'
import { IClientUserContext } from ".";
import { AllVehiclesUrl, allInspectedVehicles } from "../../ClientUser/service";


export const ClientUserContext =
  createContext<IClientUserContext>(emptyClientUserContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientUserProvider = ({ children }: ChildrenType) => {
   const [formNotFound, setFormNotFound] = useState<boolean>(false);



  // console.log(AllInspectedVehicles)

  // const fetchErrors = [
  //   errorAllInspectedVehicles,
  // ];

  // useEffect(() => {
  //   for (const err in fetchErrors) {
  //     if (fetchErrors[err]) {
  //       setFormNotFound(true);
  //     }
  //   }
  // }, [...fetchErrors]);

  
  const values = {
  };

  return (
    <ClientUserContext.Provider value={values}>{children}</ClientUserContext.Provider>
  );
};

export const useClientUser = () => {
  const context = useContext(ClientUserContext);
  if (!context) {
    throw new Error(
      "useClientUser can only be used inside ClientUserProvider"
    );
  }

  return context;
};
