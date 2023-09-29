import { createContext, useContext, useState } from "react";

import { AllClientVehicles } from "@/pages";
import { IClientInspectionsContext, emptyClientInspectionsContext } from "./empty-ClienInspections-context";

export const ClientInspectionsContext = createContext<IClientInspectionsContext>(
  emptyClientInspectionsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientInspectionsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>('');

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
    <ClientInspectionsContext.Provider value={values}>
      {children}
    </ClientInspectionsContext.Provider>
  );
};

export const useClientInspectionsContext = () => {
  const context = useContext(ClientInspectionsContext);
  if (!context) {
    throw new Error("useClientInspections can only be used inside ClientInspectionsProvider");
  }

  return context;
};
