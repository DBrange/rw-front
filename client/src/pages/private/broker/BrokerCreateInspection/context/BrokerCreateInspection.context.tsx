import { ChildrenType } from "@/models";
import { createContext, useContext, useState } from "react";
import {
  AllBrokerClientsForCreateInspectionUrl,
  IBrokerCreateInspectionContext, allBrokerClientsForCreateInspection,
  
} from "..";
import {emptyBrokerCreateInspectionContext} from './empty-brokerCreateInspection-context'
import { AllBrokerClients, AllBrokerClientsUrl, allBrokerClients } from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";

const BrokerCreateInspectionContext =
  createContext<IBrokerCreateInspectionContext>(
    emptyBrokerCreateInspectionContext
  );
  export const BrokerCreateInspectionProvider = ({
    children,
  }: ChildrenType) => {
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
        if (typeToFilter === "user" && el.personalUser?.dni) {
          return el.personalUser?.dni;
        } else if (typeToFilter === "legalUser" && el.legalUser?.cuit) {
          return el;
        }
      });

      if (searchField.trim().length) {
        if (typeToFilter === "user") {
          return dataFilteredToElement?.filter((el) =>
            regex.test(el?.personalUser?.dni as string)
          );
        } else if (typeToFilter === "legalUser") {
          return dataFilteredToElement?.filter((el) =>
            regex.test(el?.legalUser?.cuit as string)
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
      AllBrokerClientsForCreateInspectionUrl(user.user?.userBroker?.id),
      allBrokerClientsForCreateInspection
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
      <BrokerCreateInspectionContext.Provider value={values}>
        {children}
      </BrokerCreateInspectionContext.Provider>
    );
  };

export const useBrokerCreateInspectionContext = () => {
  const context = useContext(BrokerCreateInspectionContext);

  if (!context) {
    throw new Error(
      "useBrokerCreateInspectionContext can only be used inside BrokerCreateInspectionProvide"
    );
  }

  return context;
};
