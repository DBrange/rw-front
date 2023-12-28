import { AllUsers } from "@/pages";

export interface IAdminUsersContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  setTypeToFilter: React.Dispatch<React.SetStateAction<"user" | "legalUser">>;
  typeToFilter: "user" | "legalUser";
  setTypeToFilterUser: React.Dispatch<React.SetStateAction<"client" | "broker">>;
  typeToFilterUser: "client" | "broker";
  clients: AllUsers[];
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<AllUsers[][] | undefined>;
  isReachedEnd: boolean | undefined;
}

export const emptyAdminUsersContext: IAdminUsersContext = {
  setSearchField: () => {},
  searchField: "",
  setTypeToFilter: () => {},
  typeToFilter: "user",
  setTypeToFilterUser: () => {},
  typeToFilterUser: "broker",
  clients: [],
  size: 0,
  setSize: async (_size: number | ((_size: number) => number)) =>
    Promise.resolve([]),
  isReachedEnd: false,
};
