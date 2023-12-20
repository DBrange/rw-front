import { AllClientSinisters, ClientReportsHook } from "@/pages";
import { createContext, useContext, useState } from "react";
import { IClientReportsContext, emptyClientReportsContext } from "./empty-clientReports-context";

export const ClientReportsContext = createContext<IClientReportsContext>(
  emptyClientReportsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientReportsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"vehicle" | "electronic">(
    "vehicle"
  );
    const [typeToFilterReport, setTypeToFilterReport] = useState<
      "theft" | "damage" | "crash" | "fire" | undefined
    >();

  const {
    paginatedData: sinisters,
    isReachedEnd,
    setSize,
    size,
  } = ClientReportsHook<AllClientSinisters>(
    searchField,
    typeToFilter,
    typeToFilterReport
  );

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    typeToFilter,
    setTypeToFilterReport,
    typeToFilterReport,
    sinisters,
    isReachedEnd,
    setSize,
    size,
  };

  return (
    <ClientReportsContext.Provider value={values}>
      {children}
    </ClientReportsContext.Provider>
  );
};

export const useClientReportsContext = () => {
  const context = useContext(ClientReportsContext);
    if (!context) {
      throw new Error(
        "useClientInspections can only be used inside ClientInspectionsProvider"
      );
    }

    return context;
}
