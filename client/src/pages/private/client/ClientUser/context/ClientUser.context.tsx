import { createContext, useContext } from "react";
import { IClientUserContext } from ".";
import { emptyClientUserContext } from "./empty-clientUser-context";

export const ClientUserContext = createContext<IClientUserContext>(
  emptyClientUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientUserProvider = ({ children }: ChildrenType) => {



  

  const values = {  };

  return (
    <ClientUserContext.Provider value={values}>
      {children}
    </ClientUserContext.Provider>
  );
};

export const useClientUserContext = () => {
  const context = useContext(ClientUserContext);
  if (!context) {
    throw new Error("useClientUser can only be used inside ClientUserProvider");
  }

  return context;
};
