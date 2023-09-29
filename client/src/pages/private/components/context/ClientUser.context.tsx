import { createContext, useContext, useState } from "react";
import { IClientUserContext } from ".";
import { AllClientVehicles } from "../..";
import { emptyClientUserContext } from "./empty-clientUser-context";

export const ClientUserContext = createContext<IClientUserContext>(
  emptyClientUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientUserProvider = ({ children }: ChildrenType) => {
  const [formNotFound, setFormNotFound] = useState<boolean>(false);

  const [searchField, setSearchField] = useState<string>("");

  const filterData = <T extends AllClientVehicles>(
    data: T[],
    searchField: string
  ): T[] => {
    if (!searchField.length) {
      return data || [];
    } else if (searchField.length && data?.[0]?.hasOwnProperty("plate")) {
      const regex = new RegExp(`^${searchField}`, "i"); 
      return data.filter((el) => regex.test(el.plate));
    }
    return [];
  };

  const values = { filterData, setSearchField, searchField };

  return (
    <ClientUserContext.Provider value={values}>
      {children}
    </ClientUserContext.Provider>
  );
};

export const useClientUserContext = () => {
  const context = useContext(ClientUserContext);
  if (!context) {
    throw new Error("useClientUser can only be used inside ClientUserProvider");
  }

  return context;
};
