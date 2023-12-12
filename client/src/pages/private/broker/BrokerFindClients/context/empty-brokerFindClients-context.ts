import { AllBrokerClients } from "@/pages";

export interface IBrokerFindClientsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  client: any
}

export const emptyBrokerFindClientsContext: IBrokerFindClientsContext = {
  setSearchField: () => {},
  searchField: "",
  client: {}
};
