import { AllBrokerClients } from "@/pages";

export interface IBrokerClientsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<React.SetStateAction<"user" | "legalUser">>;
  clients: AllBrokerClients[];
  typeToFilter: "user" | "legalUser";
}

export const emptyBrokerClientsContext: IBrokerClientsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  clients: [],
  typeToFilter: "user",
};