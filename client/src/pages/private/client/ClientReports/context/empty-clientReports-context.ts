export interface IClientReportsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  assets: any;
  typeToFilter: "vehicle" | "electronic";
}

export const emptyClientReportsContext: IClientReportsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  assets: [],
  typeToFilter: "vehicle",
};

