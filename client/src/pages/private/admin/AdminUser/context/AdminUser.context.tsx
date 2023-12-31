import { createContext, useContext } from "react";
import { IAdminUserContext } from ".";
import { emptyAdminUserContext } from "./empty-adminUser-context";

export const AdminUserContext = createContext<IAdminUserContext>(
  emptyAdminUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const AdminUserProvider = ({ children }: ChildrenType) => {
  const values = {};

  return (
    <AdminUserContext.Provider value={values}>
      {children}
    </AdminUserContext.Provider>
  );
};

export const useAdminUserContext = () => {
  const context = useContext(AdminUserContext);
  if (!context) {
    throw new Error(
      "useClientContext can only be used inside AdminUserProvider"
    );
  }

  return context;
};
