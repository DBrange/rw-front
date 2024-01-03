import { ChildrenType } from "@/models";
import { AllBrokerClients } from "@/pages";
import { createContext, useContext, useState } from "react";
import { IClientChooseBrokerContext } from "..";
import ClientChooseBrokerHook from "../utilities/ClientChooseBrokerHook";
import { emptyClientChooseBrokerContext } from "./empty-ClientChooseBroker-context";

const ClientChooseBrokerContext =
  createContext<IClientChooseBrokerContext>(
    emptyClientChooseBrokerContext
  );
export const ClientChooseBrokerProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"user" | "legalUser">(
    "user"
  );

  const {
    paginatedData: brokers,
    isReachedEnd,
    setSize,
    size,
  } = ClientChooseBrokerHook<AllBrokerClients>(searchField, typeToFilter);

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    brokers,
    typeToFilter,
    isReachedEnd,
    setSize,
    size,
  };

  return (
    <ClientChooseBrokerContext.Provider value={values}>
      {children}
    </ClientChooseBrokerContext.Provider>
  );
};

export const useClientChooseBrokerContext = () => {
  const context = useContext(ClientChooseBrokerContext);

  if (!context) {
    throw new Error(
      "useClientChooseBrokerContext can only be used inside ClientChooseBrokerProvide"
    );
  }

  return context;
};
