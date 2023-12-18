import { AllClientSinisters } from "@/pages";

export interface IBrokerReportsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  setTypeToFilterReport: React.Dispatch<
    React.SetStateAction<"theft" | "damage" | "crash" | "fire" | undefined>
  >;
  typeToFilterReport: "theft" | "damage" | "crash" | "fire"| undefined;
  assets: AllClientSinisters[];
  typeToFilter: "vehicle" | "electronic";
}

export const emptyBrokerReportsContext: IBrokerReportsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  setTypeToFilterReport: () => { },
  typeToFilterReport: undefined,
  assets: [],
  typeToFilter: "vehicle",
};
