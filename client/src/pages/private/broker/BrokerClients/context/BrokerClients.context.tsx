import { AllBrokerClients } from "@/pages";
import { createContext, useContext, useState } from "react";
import { BrokerClientsHook } from "..";
import {
  IBrokerClientsContext,
  emptyBrokerClientsContext,
} from "./empty-brokerClients-context";

export const BrokerClientsContext = createContext<IBrokerClientsContext>(
  emptyBrokerClientsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerClientsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"user" | "legalUser">(
    "user"
  );

    const {
      paginatedData: clients,
      isReachedEnd,
      setSize,
      size,
    } = BrokerClientsHook<AllBrokerClients>(searchField, typeToFilter);

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

  // const user = useSelector((store: AppStore) => store.user);

  // const { data } = useSWR(
  //   AllBrokerClientsUrl(user.user?.userBroker?.id),
  //   allBrokerClients
  // );
  // const values = {data};

  return (
    <BrokerClientsContext.Provider value={values}>
      {children}
    </BrokerClientsContext.Provider>
  );
};

export const useBrokerClientsContext = () => {
  const context = useContext(BrokerClientsContext);
  if (!context) {
    throw new Error(
      "useBrokerClientsContext can only be used inside BrokerClientsProvider"
    );
  }

  return context
};
