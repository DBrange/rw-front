  import { AllBrokerClients } from "@/pages";

  export interface IBrokerCreateInspectionContext {
    setSearchField: React.Dispatch<React.SetStateAction<string>>;
    searchField: string;
    setTypeToFilter: React.Dispatch<React.SetStateAction<"user" | "legalUser">>;
    clients: AllBrokerClients[];
    typeToFilter: "user" | "legalUser";
  }

  export const emptyBrokerCreateInspectionContext: IBrokerCreateInspectionContext = {
    setSearchField: () => {},
    searchField: "",
    setTypeToFilter: () => {},
    clients: [],
    typeToFilter: "user",
  };