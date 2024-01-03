import { ChildrenType } from "@/models";
import {
  AllBrokerClients
} from "@/pages";
import { createContext, useContext, useState } from "react";
import {
  IBrokerCreateInspectionContext
} from "..";
import BrokerCreateInspectionHook from "../utilities/BrokerCreateInspectionHook.utility";
import { emptyBrokerCreateInspectionContext } from "./empty-brokerCreateInspection-context";

const BrokerCreateInspectionContext =
  createContext<IBrokerCreateInspectionContext>(
    emptyBrokerCreateInspectionContext
  );
export const BrokerCreateInspectionProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"user" | "legalUser">(
    "user"
  );

  const {
    paginatedData: clients,
    isReachedEnd,
    setSize,
    size,
  } = BrokerCreateInspectionHook<AllBrokerClients>(searchField, typeToFilter);

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
    isReachedEnd,
    setSize,
    size,
  };

  return (
    <BrokerCreateInspectionContext.Provider value={values}>
      {children}
    </BrokerCreateInspectionContext.Provider>
  );
};

export const useBrokerCreateInspectionContext = () => {
  const context = useContext(BrokerCreateInspectionContext);

  if (!context) {
    throw new Error(
      "useBrokerCreateInspectionContext can only be used inside BrokerCreateInspectionProvide"
    );
  }

  return context;
};
