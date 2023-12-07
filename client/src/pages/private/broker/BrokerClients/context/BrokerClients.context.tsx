import { createContext, useContext, useState } from "react";
import {
  IBrokerClientsContext,
  emptyBrokerClientsContext,
} from "./empty-brokerClients-context";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { AllBrokerClientsUrl, allBrokerClients } from "..";
import { AllBrokerClients } from "@/pages";

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

  const filterData = <T extends AllBrokerClients>(
    data: T[] | undefined,
    searchField: string
  ): T[] => {
    console.log(data);

    if (!data) return [];

    const regex = new RegExp(`^${searchField}`, "i");

    const dataFilteredToElement: T[] = data?.filter((el) => {
      if (typeToFilter === "user" && el.dni) {
        return el.dni;
      } else if (typeToFilter === "legalUser" && el.cuit) {
        return el;
      }
    });

    if (searchField.trim().length) {
      if (typeToFilter === "user") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.dni as string)
        );
      } else if (typeToFilter === "legalUser") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.cuit as string)
        );
      }
    } else {
      return dataFilteredToElement;
    }
    return [];
  };

  const user = useSelector((store: AppStore) => store.user);

  const brokerType = () => {
    const { data: allBrokerAssetsUser } = useSWR(
      AllBrokerClientsUrl(user.user?.userBroker?.id),
      allBrokerClients
    );

    const searchedUserAsset: AllBrokerClients[] = filterData<AllBrokerClients>(
      allBrokerAssetsUser!,
      searchField
    );

    return searchedUserAsset;
  };
  const clients = [...brokerType()]
    .filter((asset) => asset !== undefined)
    .flat();

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
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
