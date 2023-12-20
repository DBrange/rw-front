import { AllBrokerClients } from "@/pages";

export interface IBrokerClientsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<React.SetStateAction<"user" | "legalUser">>;
  clients: AllBrokerClients[];
  typeToFilter: "user" | "legalUser";
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<AllBrokerClients[][] | undefined>;
  isReachedEnd: boolean | undefined;
}

export const emptyBrokerClientsContext: IBrokerClientsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  clients: [],
  typeToFilter: "user",
  size: 0,
  setSize: async (_size: number | ((_size: number) => number)) =>
    Promise.resolve([]),
  isReachedEnd: false,
};