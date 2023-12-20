import { AllClientAssets } from "@/pages";

export interface IBrokerInspectionsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  inspections: AllClientAssets[];
  typeToFilter: "vehicle" | "electronic";
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<AllClientAssets[][] | undefined>;
  error: any;
  isReachedEnd: boolean | undefined;
  isLoading: boolean | undefined;
}

export const emptyBrokerInspectionsContext: IBrokerInspectionsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  inspections: [],
  typeToFilter: "vehicle",
  size: 0,
  setSize: async (_size: number | ((_size: number) => number)) => Promise.resolve([]),
  error: undefined,
  isReachedEnd: false,
  isLoading: false,
};
