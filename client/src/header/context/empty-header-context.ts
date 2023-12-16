import { Notification } from "@/models";

export interface IHeaderContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  newNotifications: boolean;
  notifications: Notification[];
  refreshNotifications: () => void
  setNewNotifications: React.Dispatch<React.SetStateAction<boolean>>;
}

export const emptyHeaderContext: IHeaderContext = {
  modal: false,
  setModal: () => {},
  newNotifications: false,
  notifications: [],
  refreshNotifications: () => {},
  setNewNotifications: () => {}
};
