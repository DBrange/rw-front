import { createContext, useContext, useState } from "react";

import {
  AllAssetsLegalUserUrl,
  AllAssetsUserUrl,
  AllClientAssets,
  AllElementsUrl,
  allElements,
  allInspected,
} from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import {
  IClientElementsContext,
  emptyClientElementsContext,
} from "./empty-ClientElements-context";

export const ClientElementsContext =
  createContext<IClientElementsContext>(emptyClientElementsContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientElementsProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"vehicle" | "electronic">(
    "vehicle"
  );

  const filterData = <T extends AllClientAssets>(
    data: T[] | undefined,
    searchField: string
  ): T[] => {
    if (!data) return [];

    const regex = new RegExp(`^${searchField}`, "i");

    const dataFilteredToElement: T[] = data?.filter((el) => {
      if (typeToFilter === "vehicle") {
        return el.vehicle;
      } else if (typeToFilter === "electronic") {
        return el.electronic;
      }
    });

    if (searchField.trim().length) {
      if (typeToFilter === "vehicle") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.vehicle?.plate as string)
        );
      } else if (typeToFilter === "electronic") {
        return dataFilteredToElement?.filter((el) =>
          regex.test(el?.electronic?.model as string)
        );
      }
    } else {
      return dataFilteredToElement;
    }
    return [];
  };

  const user = useSelector((store: AppStore) => store.user);

  const clientType = () => {
    if (user.user?.id) {
      const { data: allAssetsUser } = useSWR(
        AllElementsUrl(user.user.id),
        allElements
      );

      const searchedUserAsset: AllClientAssets[] = filterData<AllClientAssets>(
        allAssetsUser!,
        searchField
      );

      return searchedUserAsset;
    } else {
      const { data: allAssetsLegalUser } = useSWR(
        AllAssetsLegalUserUrl(user.user?.id),
        allInspected
      );

      const searchedLegalAssets: AllClientAssets[] =
        filterData<AllClientAssets>(allAssetsLegalUser!, searchField);

      return searchedLegalAssets;
    }
  };

  const assets = [...clientType()]
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
    <ClientElementsContext.Provider value={values}>
      {children}
    </ClientElementsContext.Provider>
  );
};

export const useClientElementsContext = () => {
  const context = useContext(ClientElementsContext);
  if (!context) {
    throw new Error(
      "useClientElements can only be used inside ClientElementsProvider"
    );
  }

  return context;
};
