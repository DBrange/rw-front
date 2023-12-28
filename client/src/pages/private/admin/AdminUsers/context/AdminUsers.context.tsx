import { AllUsers } from "@/pages";
import { createContext, useContext, useState } from "react";
import { AdminUsersHook } from "..";
import {
  IAdminUsersContext,
  emptyAdminUsersContext,
} from "./empty-adminUsers-context";
export const AdminUsersContext = createContext<IAdminUsersContext>(
  emptyAdminUsersContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const AdminUsersProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"user" | "legalUser">(
    "user"
  );

  const [typeToFilterUser, setTypeToFilterUser] = useState<"client" | "broker">(
    "broker"
  );

    const {
      paginatedData: clients,
      isReachedEnd,
      setSize,
      size,
    } = AdminUsersHook<AllUsers>(searchField, typeToFilter, typeToFilterUser);

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
    isReachedEnd,
    setSize,
    size,
    typeToFilterUser,
    setTypeToFilterUser,
  };

  // const user = useSelector((store: AppStore) => store.user);

  // const { data } = useSWR(
  //   AllUsersUrl(user.user?.userBroker?.id),
  //   allAdminUsers
  // );
  // const values = {data};

  return (
    <AdminUsersContext.Provider value={values}>
      {children}
    </AdminUsersContext.Provider>
  );
};

export const useAdminUsersContext = () => {
  const context = useContext(AdminUsersContext);
  if (!context) {
    throw new Error(
      "useAdminUsersContext can only be used inside AdminUsersProvider"
    );
  }

  return context
};
