import { createContext, useContext, useState } from "react";

import {
  AllClientSinisters,
} from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { AllBrokerUserSinisterUrl, IBrokerReportsContext, allBrokerSinister } from "..";
import {emptyBrokerReportsContext} from './empty-brokerReports-context'

export const BrokerReportsContext = createContext<IBrokerReportsContext>(
  emptyBrokerReportsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerReportsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"vehicle" | "electronic">(
    "vehicle"
  );

  const filterData = <T extends AllClientSinisters>(
    data: T[] | undefined,
    searchField: string
  ): T[] => {
    console.log(data);

    if (!data) return [];

    const regex = new RegExp(`^${searchField}`, "i");

    const dataFilteredToElement: T[] = data?.filter((el) => {
      if (typeToFilter === "vehicle") {
        return el.asset.vehicle;
      } else if (typeToFilter === "electronic") {
        return el.asset.electronics;
      }
    });

    if (searchField.trim().length) {
      if (typeToFilter === "vehicle") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.asset.vehicle?.plate as string)
        );
      } else if (typeToFilter === "electronic") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.asset.electronics?.model as string)
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
        AllBrokerUserSinisterUrl(user.user?.id),
        allBrokerSinister
      );

      const searchedUserAsset: AllClientSinisters[] =
        filterData<AllClientSinisters>(allBrokerAssetsUser!, searchField);

      return searchedUserAsset;
   
  };

  const assets = [...brokerType()]
    .filter((asset) => asset !== undefined)
    .flat();

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    assets,
    typeToFilter,
  };

  return (
    <BrokerReportsContext.Provider value={values}>
      {children}
    </BrokerReportsContext.Provider>
  );
};

export const useBrokerReportsContext = () => {
  const context = useContext(BrokerReportsContext);
  if (!context) {
    throw new Error(
      "useBrokerInspections can only be used inside BrokerInspectionsProvider"
    );
  }

  return context;
};