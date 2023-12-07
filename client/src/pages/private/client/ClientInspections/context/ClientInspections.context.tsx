import { createContext, useContext, useState } from "react";

import {
  AllAssetsLegalUserUrl,
  AllAssetsUserUrl,
  AllClientAssets,
  allInspected
} from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import {
  IClientInspectionsContext,
  emptyClientInspectionsContext,
} from "./empty-ClienInspections-context";

export const ClientInspectionsContext =
  createContext<IClientInspectionsContext>(emptyClientInspectionsContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientInspectionsProvider = ({ children }: ChildrenType) => {
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

  const clientType = () => {
    if (user.user.dni) {
      const {  data: allAssetsUser } = useSWR(
        AllAssetsUserUrl(user.user.id),
        allInspected
      );

      const searchedUserAsset: AllClientAssets[] = filterData<AllClientAssets>(
        allAssetsUser!,
        searchField
      );

      return searchedUserAsset;
    } else {
      const {  data: allAssetsLegalUser } =
        useSWR(AllAssetsLegalUserUrl(user.user.id), allInspected);

      const searchedLegalAssets: AllClientAssets[] =
        filterData<AllClientAssets>(allAssetsLegalUser!, searchField);
      
      return searchedLegalAssets;
    }
  };

  const assets = [...clientType()].filter((asset) => asset !== undefined).flat();

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    assets,
    typeToFilter,
  };

  return (
    <ClientInspectionsContext.Provider value={values}>
      {children}
    </ClientInspectionsContext.Provider>
  );
};

export const useClientInspectionsContext = () => {
  const context = useContext(ClientInspectionsContext);
  if (!context) {
    throw new Error(
      "useClientInspections can only be used inside ClientInspectionsProvider"
    );
  }

  return context;
};
