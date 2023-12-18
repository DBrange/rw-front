export interface IClientReportsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  assets: any;
  typeToFilter: "vehicle" | "electronic";
  setTypeToFilterReport: React.Dispatch<
    React.SetStateAction<"theft" | "damage" | "crash" | "fire" | undefined>
  >;
  typeToFilterReport: "theft" | "damage" | "crash" | "fire" | undefined;
}

export const emptyClientReportsContext: IClientReportsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  assets: [],
  typeToFilter: "vehicle",
  setTypeToFilterReport: () => {},
  typeToFilterReport: undefined,
};
