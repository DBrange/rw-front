import { ChildrenType } from "@/models";
import { AllBrokerClients } from "@/pages";
import { AppStore } from "@/redux";
import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import {
  IBrokerCreateReportContext,
} from "..";
import { emptyBrokerCreateReportContext } from "./empty-brokerCreateReport-context";
import { AllBrokerClientsForCreateSinisterUrl, allBrokerClientsForCreateSinister } from "../services/add-report-broker.service";
import BrokerCreateReportHook from "../utilities/BrokerCreateReportHook.utility";

const BrokerCreateReportContext =
  createContext<IBrokerCreateReportContext>(
    emptyBrokerCreateReportContext
  );
export const BrokerCreateReportProvider = ({ children }: ChildrenType) => {
  const [searchField, setSearchField] = useState<string>("");

  const [typeToFilter, setTypeToFilter] = useState<"user" | "legalUser">(
    "user"
  );

    const {
      paginatedData: clients,
      isReachedEnd,
      setSize,
      size,
    } = BrokerCreateReportHook<AllBrokerClients>(searchField, typeToFilter);

  const values = {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
    isReachedEnd,
    setSize,
    size,
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
