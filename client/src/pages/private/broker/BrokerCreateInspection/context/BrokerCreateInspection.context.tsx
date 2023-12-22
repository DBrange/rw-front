import { ChildrenType } from "@/models";
import { createContext, useContext, useState } from "react";
import {
  AllBrokerClientsForCreateInspectionUrl,
  IBrokerCreateInspectionContext,
  allBrokerClientsForCreateInspection,
} from "..";
import { emptyBrokerCreateInspectionContext } from "./empty-brokerCreateInspection-context";
import {
  AllBrokerClients,
  AllBrokerClientsUrl,
  allBrokerClients,
} from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import BrokerCreateInspectionHook from "../utilities/BrokerCreateInspectionHook.utility";

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
