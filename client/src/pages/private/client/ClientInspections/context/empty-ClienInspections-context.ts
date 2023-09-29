import { AllClientVehicles } from "@/pages";

export interface IClientInspectionsContext {
  filterData: <T extends AllClientVehicles>(
    data: T[],
    searchField: string
  ) => T[];
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
}

export const emptyClientInspectionsContext: IClientInspectionsContext = {
  filterData: () => [],
  setSearchField: () => {},
  searchField: "",
};
