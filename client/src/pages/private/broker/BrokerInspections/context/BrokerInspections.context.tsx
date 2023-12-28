import { AllClientAssets } from "@/pages";
import { createContext, useContext, useState } from "react";
import {
  IBrokerInspectionsContext
} from "..";
import InspectionsPaginationHook from "../utilities/InspectionPaginationHook.utility";
import { emptyBrokerInspectionsContext } from "./empty-brokerInspections-context";

export const BrokerInspectionsContext =
  createContext<IBrokerInspectionsContext>(emptyBrokerInspectionsContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerInspectionsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"vehicle" | "electronic">(
    "vehicle"
  );

  const {
    paginatedData: inspections,
    error,
    isReachedEnd,
    isLoading,
    setSize,
    size,
  } = InspectionsPaginationHook<AllClientAssets>(searchField, typeToFilter);

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    inspections,
    typeToFilter,
    size,
    setSize,
    error,
    isReachedEnd,
    isLoading,
  };

  return (
    <BrokerInspectionsContext.Provider value={values}>
      {children}
    </BrokerInspectionsContext.Provider>
  );
};

export const useBrokerInspectionsContext = () => {
  const context = useContext(BrokerInspectionsContext);
  if (!context) {
    throw new Error(
      "useBrokerInspections can only be used inside BrokerInspectionsProvider"
    );
  }

  return context;
};
