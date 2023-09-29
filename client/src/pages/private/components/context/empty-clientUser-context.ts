import { AllClientVehicles } from "../.."

export interface IClientUserContext {
  filterData: <T extends AllClientVehicles>(
    data: T[],
    searchField: string
  ) => T[];
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string
}

export const emptyClientUserContext: IClientUserContext = {
  filterData: () => [],
  setSearchField: () => {},
  searchField: ''
}; 