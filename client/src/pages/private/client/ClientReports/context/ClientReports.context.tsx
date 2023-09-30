import { createContext, useContext } from "react";
import { IClientReportsContext, emptyClientReportsContext } from "./empty-clientReports-context";

export const ClientReportsContext = createContext<IClientReportsContext>(
  emptyClientReportsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientReportsProvider = ({ children }: ChildrenType) => {
  const values = {};
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
