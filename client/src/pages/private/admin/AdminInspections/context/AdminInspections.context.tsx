import { AllClientAssets } from "@/pages";
import { createContext, useContext, useState } from "react";
import { IAdminInspectionsContext } from "..";
import { emptyAdminInspectionsContext } from "./empty-adminInspections-context";
import AdminInspectionsHook from "../utilities/AdminInspectionesHook.utility";

export const AdminInspectionsContext =
  createContext<IAdminInspectionsContext>(emptyAdminInspectionsContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const AdminInspectionsProvider = ({ children }: ChildrenType) => {
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
  } = AdminInspectionsHook<AllClientAssets>(searchField, typeToFilter);

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
    <AdminInspectionsContext.Provider value={values}>
      {children}
    </AdminInspectionsContext.Provider>
  );
};

export const useAdminInspectionsContext = () => {
  const context = useContext(AdminInspectionsContext);
  if (!context) {
    throw new Error(
      "useAdminInspections can only be used inside AdminInspectionsProvider"
    );
  }

  return context;
};
