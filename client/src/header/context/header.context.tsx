import { AppDispatch, AppStore } from "@/redux";
import {
  addNotificationsAsync,
  updateNotificationAllReadAsync,
} from "@/redux/slices/notificationSlice";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IHeaderContext, emptyHeaderContext } from "./empty-header-context";
import { Notification } from "@/models";
import HeaderHook from "../utilities/header.hook";
import { notificationsModal } from "@/services/sharing-information.service";

export const HeaderContext = createContext<IHeaderContext>(emptyHeaderContext);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const HeaderProvider = ({ children }: ChildrenType) => {
  const [modal, setModal] = useState<boolean>(false);
  const user = useSelector((store: AppStore) => store.user);
  const dispatchAsync = useDispatch<AppDispatch>();
  //   const [newNotifications, setNewNotifications] = useState<boolean>(false);
  //   const notifications = useSelector((store: AppStore) => store.notification);

  //   const refreshNotifications2 = () => {
  //     dispatchAsync(addNotificationsAsync(user.user?.id));
  //           const s = notifications.map((el) => el.isRead).some((el) => !el);
  //     if (s) setNewNotifications(true);
  //   };

  const refreshNotifications = () => {
    console.log('holis')
    dispatchAsync(addNotificationsAsync(user.user?.id));
    const s = notifications.map((el) => el.isRead).some((el) => !el);
    // if (s) setNewNotifications(true);
    dispatchAsync(updateNotificationAllReadAsync(user.user?.id));
    mutate()
  };

    useEffect(() => {
    notificationsModal.getSubject.subscribe(bol => setModal(bol))
    }, [])
  
    useEffect(() => {
    refreshNotifications()
  },[modal])

  const {
    paginatedData: notifications,
    isReachedEnd,
    setSize,
    size,
    mutate,
    isLoading,
  } = HeaderHook<Notification>();

  //   useEffect(() => {
  // dispatch(addNotification(notificationsData))
  //   },[notificationsData])

  const values = {
    notifications,
    isReachedEnd,
    setSize,
    size,
    modal,
    setModal,
    refreshNotifications,
    mutate,
    isLoading,
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
