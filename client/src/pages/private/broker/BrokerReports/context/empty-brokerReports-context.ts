export interface IBrokerReportsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  assets: any;
  typeToFilter: "vehicle" | "electronic";
}

export const emptyBrokerReportsContext: IBrokerReportsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  assets: [],
  typeToFilter: "vehicle",
};
