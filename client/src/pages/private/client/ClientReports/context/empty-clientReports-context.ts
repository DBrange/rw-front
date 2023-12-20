import { AllClientSinisters } from "@/pages";

export interface IClientReportsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  typeToFilter: "vehicle" | "electronic";
  setTypeToFilterReport: React.Dispatch<
    React.SetStateAction<"theft" | "damage" | "crash" | "fire" | undefined>
  >;
  typeToFilterReport: "theft" | "damage" | "crash" | "fire" | undefined;
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<AllClientSinisters[][] | undefined>;
  isReachedEnd: boolean | undefined;
  sinisters: AllClientSinisters[]
}

export const emptyClientReportsContext: IClientReportsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  typeToFilter: "vehicle",
  setTypeToFilterReport: () => {},
  typeToFilterReport: undefined,
  size: 0,
  setSize: async (_size: number | ((_size: number) => number)) =>
    Promise.resolve([]),
  isReachedEnd: false,
  sinisters: []
};
