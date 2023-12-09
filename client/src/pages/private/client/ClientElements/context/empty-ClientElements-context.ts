export interface IClientElementsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  assets: any;
  typeToFilter: "vehicle" | "electronic";
}

export const emptyClientElementsContext: IClientElementsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  assets: [],
  typeToFilter: "vehicle",
};
