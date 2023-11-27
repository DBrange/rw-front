import { AllBrokerClients } from "@/pages";

export interface IBrokerCreateReportContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<React.SetStateAction<"user" | "legalUser">>;
  clients: AllBrokerClients[];
  typeToFilter: "user" | "legalUser";
}

export const emptyBrokerCreateReportContext: IBrokerCreateReportContext =
  {
    setSearchField: () => {},
    searchField: "",
    setTypeToFilter: () => {},
    clients: [],
    typeToFilter: "user",
  };
