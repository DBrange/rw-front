import { createContext, useContext, useEffect, useState } from "react";
import { IHeaderContext, emptyHeaderContext } from "./empty-header-context";
import { AppStore, AppDispatch } from "@/redux";
import {
  addNotification,
  addNotificationsAsync,
  updateNotificationAllReadAsync,
} from "@/redux/slices/notificationSlice";
import {
  getNotificationsUrl,
  getNotifications,
} from "@/services/get-notification.service";
import { useSelector, useDispatch } from "react-redux";
import useSWRMutation from "swr/mutation";

export const HeaderContext = createContext<IHeaderContext>(emptyHeaderContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const HeaderProvider = ({ children }: ChildrenType) => {
  const [modal, setModal] = useState<boolean>(false);
  const user = useSelector((store: AppStore) => store.user);
  const dispatch = useDispatch();
  const dispatchAsync = useDispatch<AppDispatch>();
  const [newNotifications, setNewNotifications] = useState<boolean>(false);
  const notifications = useSelector((store: AppStore) => store.notification);

  // const { data, trigger } = useSWRMutation(getNotificationsUrl(user.user?.id), getNotifications);
  // const notifications = useSelector((store: AppStore) => store?.user.user?.receivedNotifications)
  const refreshNotifications2 = () => {
    dispatchAsync(addNotificationsAsync(user.user?.id));
          const s = notifications.map((el) => el.isRead).some((el) => !el);
    if (s) setNewNotifications(true);
    // dispatchAsync(updateNotificationAllReadAsync(user.user?.id));
  };
  
  const refreshNotifications = () => {
    dispatchAsync(addNotificationsAsync(user.user?.id));
          const s = notifications.map((el) => el.isRead).some((el) => !el);
          if (s) setNewNotifications(true);
    dispatchAsync(updateNotificationAllReadAsync(user.user?.id));
  };

  useEffect(() => {
  refreshNotifications2()
},[])



  const values = {
    modal,
    setModal,
    newNotifications,
    notifications,
    refreshNotifications,
    setNewNotifications,
  };

  return (
    <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext can only be used inside HeaderProvider");
  }

  return context;
};
