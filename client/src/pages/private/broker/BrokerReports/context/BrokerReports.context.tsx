import { createContext, useContext, useState } from "react";

import { AllClientAssets } from "@/pages";
import {
  BrokerReportsHook,
  IBrokerReportsContext
} from "..";
import { emptyBrokerReportsContext } from "./empty-brokerReports-context";

export const BrokerReportsContext = createContext<IBrokerReportsContext>(
  emptyBrokerReportsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerReportsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"vehicle" | "electronic">(
    "vehicle"
  );

  const [typeToFilterReport, setTypeToFilterReport] = useState<
    "theft" | "damage" | "crash" | "fire" | undefined
  >();

  const {
    paginatedData: sinisters,
    error,
    isReachedEnd,
    isLoading,
    setSize,
    size,
  } = BrokerReportsHook<AllClientAssets>(
    searchField,
    typeToFilter,
    typeToFilterReport
  );

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    setTypeToFilterReport,
    typeToFilterReport,
    typeToFilter,
    sinisters,
    error,
    isReachedEnd,
    isLoading,
    setSize,
    size,
  };

  return (
    <BrokerReportsContext.Provider value={values}>
      {children}
    </BrokerReportsContext.Provider>
  );
};

export const useBrokerReportsContext = () => {
  const context = useContext(BrokerReportsContext);
  if (!context) {
    throw new Error(
      "useBrokerInspections can only be used inside BrokerInspectionsProvider"
    );
  }

  return context;
};
