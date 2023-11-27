import { AllClientAssets } from "@/pages";
import { AppStore } from "@/redux";
import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { IBrokerInspectionsContext, AllBrokerAssetsLegalUserUrl, allBrokerInspected, AllBrokerAssetsUserUrl } from "..";
import {emptyBrokerInspectionsContext} from './empty-brokerInspections-context'


export const BrokerInspectionsContext =
  createContext<IBrokerInspectionsContext>(emptyBrokerInspectionsContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerInspectionsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"vehicle" | "electronic">(
    "vehicle"
  );

  const filterData = <T extends AllClientAssets>(
    data: T[] | undefined,
    searchField: string
  ): T[] => {
    console.log(data);

    if (!data) return [];

    const regex = new RegExp(`^${searchField}`, "i");

    const dataFilteredToElement: T[] = data?.filter((el) => {
      if (typeToFilter === "vehicle") {
        return el.vehicle;
      } else if (typeToFilter === "electronic") {
        return el.electronics;
      }
    });

    if (searchField.trim().length) {
      if (typeToFilter === "vehicle") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.vehicle?.plate as string)
        );
      } else if (typeToFilter === "electronic") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.electronics?.model as string)
        );
      }
    } else {
      return dataFilteredToElement;
    }
    return [];
  };

  const user = useSelector((store: AppStore) => store.user);

  const brokerType = () => {
    if (user.user.dni) {
      const { data: allBrokerAssetsUser } = useSWR(
        AllBrokerAssetsUserUrl(user.user.broker?.id),
        allBrokerInspected
      );

      const searchedUserAsset: AllClientAssets[] = filterData<AllClientAssets>(
        allBrokerAssetsUser!,
        searchField
      );

      return searchedUserAsset;
    } else {
      const { data: allBrokerAssetsLegalUser } = useSWR(
        AllBrokerAssetsLegalUserUrl(user.user.broker?.id),
        allBrokerInspected
      );

      const searchedLegalAssets: AllClientAssets[] =
        filterData<AllClientAssets>(allBrokerAssetsLegalUser!, searchField);

      return searchedLegalAssets;
    }
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
    <BrokerInspectionsContext.Provider value={values}>
      {children}
    </BrokerInspectionsContext.Provider>
  );
};

export const useBrokerInspectionsContext = () => {
  const context = useContext(BrokerInspectionsContext);
  if (!context) {
    throw new Error(
      "useBrokerInspections can only be used inside BrokerInspectionsProvider"
    );
  }

  return context;
};
