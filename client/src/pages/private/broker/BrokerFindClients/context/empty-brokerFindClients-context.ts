import { ClientByEmail } from "@/pages";

export interface IBrokerFindClientsContext {
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
  searchField: string;
  client: ClientByEmail | undefined | void;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalActive: boolean;
  activateTrigger: () => void
}

export const emptyBrokerFindClientsContext: IBrokerFindClientsContext = {
  setSearchField: () => {},
  searchField: "",
  client: undefined,
  setModalActive: () => { },
  modalActive: false,
  activateTrigger: () => {}
};
