import { AllClientAssets } from "@/pages";
import { AppStore } from "@/redux";
import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import {
  IBrokerInspectionsContext,
  allBrokerInspected,
  AllBrokerAssetsUserUrl,
} from "..";
import { emptyBrokerInspectionsContext } from "./empty-brokerInspections-context";

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
  const [pageApi, setPageApi] = useState<number>(1);

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
        return dataFilteredToElement?.filter(
          (el) =>
            regex.test(el?.electronic?.model as string) ||
            regex.test(el?.electronic?.smartphone.imei as string)
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
      AllBrokerAssetsUserUrl(user.user?.id, pageApi),
      allBrokerInspected
    );

    const searchedUserAsset: AllClientAssets[] = filterData<AllClientAssets>(
      allBrokerAssetsUser!,
      searchField
    );

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