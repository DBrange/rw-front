import { Notification } from "@/models";
import { KeyedMutator } from "swr";

export interface IHeaderContext {
  notifications: Notification[];
  size: number;
  setSize: (
    size: number | ((_size: number) => number)
  ) => Promise<Notification[][] | undefined>;
  isReachedEnd: boolean | undefined;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  refreshNotifications: () => void;
  mutate: any // KeyedMutator<Notification[][]>;
  isLoading: boolean
}

export const emptyHeaderContext: IHeaderContext = {
  notifications: [],
  size: 0,
  setSize: async (_size: number | ((_size: number) => number)) =>
    Promise.resolve([]),
  isReachedEnd: false,
  modal: false,
  setModal: () => {},
  refreshNotifications: () => { },
  mutate: '',
  isLoading: false
};
