import { createContext, useContext, useState } from "react";
import {
  IBrokerFindClientsContext,
  emptyBrokerFindClientsContext,
} from "./empty-brokerFindClients-context";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { AllBrokerClients } from "@/pages";
import { getClientUrl, getClient } from "..";

export const BrokerFindClientsContext = createContext<IBrokerFindClientsContext>(
  emptyBrokerFindClientsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerFindClientsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

    const user = useSelector((store: AppStore) => store.user);


    const { data: client } = useSWR(
      getClientUrl(user.user?.userBroker?.id),
      getClient
    );

  
  const values = {
    setSearchField,
    searchField,
    client
  };

  // const user = useSelector((store: AppStore) => store.user);

  // const { data } = useSWR(
  //   AllBrokerClientsUrl(user.user?.userBroker?.id),
  //   allBrokerClients
  // );
  // const values = {data};

  return (
    <BrokerFindClientsContext.Provider value={values}>
      {children}
    </BrokerFindClientsContext.Provider>
  );
};

export const useBrokerFindClientsContext = () => {
  const context = useContext(BrokerFindClientsContext);
  if (!context) {
    throw new Error(
      "useBrokerFindClientsContext can only be used inside BrokerFindClientsProvider"
    );
  }

  return context;
};
