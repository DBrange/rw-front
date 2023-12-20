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
  typeToFilterReport: "theft" | "damage" | "crash" | "fire" | undefined;
  sinisters: AllClientSinisters[];
  typeToFilter: "vehicle" | "electronic";
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<AllClientSinisters[][] | undefined>;
  error: any;
  isReachedEnd: boolean | undefined;
  isLoading: boolean | undefined;
}

export const emptyBrokerReportsContext: IBrokerReportsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  setTypeToFilterReport: () => {},
  typeToFilterReport: undefined,
  sinisters: [],
  typeToFilter: "vehicle",
  size: 0,
  setSize: async (_size: number | ((_size: number) => number)) =>
    Promise.resolve([]),
  error: undefined,
  isReachedEnd: false,
  isLoading: false,
};
