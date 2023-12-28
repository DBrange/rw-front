import { createContext, useContext, useState } from "react";

import { AllClientAssets } from "@/pages";
import { AdminReportsHook, IAdminReportsContext } from "..";
import { emptyAdminReportsContext } from "./empty-adminReports-context";

export const AdminReportsContext = createContext<IAdminReportsContext>(
  emptyAdminReportsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const AdminReportsProvider = ({ children }: ChildrenType) => {
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
  } = AdminReportsHook<AllClientAssets>(
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
    <AdminReportsContext.Provider value={values}>
      {children}
    </AdminReportsContext.Provider>
  );
};

export const useAdminReportsContext = () => {
  const context = useContext(AdminReportsContext);
  if (!context) {
    throw new Error(
      "useBrokerInspections can only be used inside BrokerInspectionsProvider"
    );
  }

  return context;
};
