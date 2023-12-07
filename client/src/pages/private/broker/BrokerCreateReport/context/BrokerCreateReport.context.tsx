import { ChildrenType } from "@/models";
import { AllBrokerClients, AllBrokerClientsForCreateSinisterUrl, allBrokerClientsForCreateSinister } from "@/pages";
import { AppStore } from "@/redux";
import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import {
  IBrokerCreateReportContext,
} from "..";
import { emptyBrokerCreateReportContext } from "./empty-brokerCreateReport-context";

const BrokerCreateReportContext =
  createContext<IBrokerCreateReportContext>(
    emptyBrokerCreateReportContext
  );
export const BrokerCreateReportProvider = ({ children }: ChildrenType) => {
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
      AllBrokerClientsForCreateSinisterUrl(user.user?.userBroker?.id),
      allBrokerClientsForCreateSinister
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

  return (
    <BrokerCreateReportContext.Provider value={values}>
      {children}
    </BrokerCreateReportContext.Provider>
  );
};

export const useBrokerCreateReportContext = () => {
  const context = useContext(BrokerCreateReportContext);

  if (!context) {
    throw new Error(
      "useBrokerCreateReportContext can only be used inside BrokerCreateReportProvide"
    );
  }

  return context;
};
