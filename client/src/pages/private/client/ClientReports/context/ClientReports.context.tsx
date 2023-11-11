import { createContext, useContext, useState } from "react";
import { IClientReportsContext, emptyClientReportsContext } from "./empty-clientReports-context";
import { AllClientSinisters, AllLegalUserSinisterUrl, AllUserSinisterUrl, allSinister } from "@/pages";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux";
import useSWR from "swr";

export const ClientReportsContext = createContext<IClientReportsContext>(
  emptyClientReportsContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientReportsProvider = ({ children }: ChildrenType) => {
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

  const clientType = () => {
    if (user.user.dni) {
      const { data: allAssetsUser } = useSWR(
        AllUserSinisterUrl(user.user.id),
        allSinister
      );

      const searchedUserAsset: AllClientSinisters[] = filterData<AllClientSinisters>(
        allAssetsUser!,
        searchField
      );

      return searchedUserAsset;
    } else {
      const { data: allAssetsLegalUser } = useSWR(
        AllLegalUserSinisterUrl(user.user.id),
        allSinister
      );

      const searchedLegalAssets: AllClientSinisters[] =
        filterData<AllClientSinisters>(allAssetsLegalUser!, searchField);

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
    <ClientReportsContext.Provider value={values}>
      {children}
    </ClientReportsContext.Provider>
  );
};

export const useClientReportsContext = () => {
  const context = useContext(ClientReportsContext);
    if (!context) {
      throw new Error(
        "useClientInspections can only be used inside ClientInspectionsProvider"
      );
    }

    return context;
}
