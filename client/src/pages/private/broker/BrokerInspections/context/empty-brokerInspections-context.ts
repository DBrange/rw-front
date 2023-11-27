import { AllClientAssets } from "@/pages";

export interface IBrokerInspectionsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  assets: AllClientAssets[];
  typeToFilter: "vehicle" | "electronic";
}

export const emptyBrokerInspectionsContext: IBrokerInspectionsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  assets: [],
  typeToFilter: "vehicle",
};
