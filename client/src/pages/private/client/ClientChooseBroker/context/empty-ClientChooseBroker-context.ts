import { AllBrokerClients } from "@/pages";

export interface IClientChooseBrokerContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<React.SetStateAction<"user" | "legalUser">>;
  brokers: AllBrokerClients[];
  typeToFilter: "user" | "legalUser";
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<AllBrokerClients[][] | undefined>;
  isReachedEnd: boolean | undefined;
}

export const emptyClientChooseBrokerContext: IClientChooseBrokerContext =
  {
    setSearchField: () => {},
    searchField: "",
    setTypeToFilter: () => {},
    brokers: [],
    typeToFilter: "user",
    size: 0,
    setSize: async (_size: number | ((_size: number) => number)) =>
      Promise.resolve([]),
    isReachedEnd: false,
  };
