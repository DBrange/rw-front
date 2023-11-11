export interface IClientInspectionsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<
    React.SetStateAction<"vehicle" | "electronic">
  >;
  assets: any;
  typeToFilter: "vehicle" | "electronic";
}

export const emptyClientInspectionsContext: IClientInspectionsContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  assets: [],
  typeToFilter: "vehicle",
};
