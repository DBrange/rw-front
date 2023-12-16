import { createContext, useContext, useEffect } from "react";
import { IBrokerUserContext } from ".";
import { emptyBrokerUserContext } from "./empty-BrokerUser-context";
import { AppStore } from "@/redux";
import { addNotification } from "@/redux/slices/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "@/models";
import { getNotificationsUrl, getNotifications } from "@/services/get-notification.service";
import useSWR from "swr";

export const BrokerUserContext = createContext<IBrokerUserContext>(
  emptyBrokerUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerUserProvider = ({ children }: ChildrenType) => {
  const dispatch = useDispatch();

  const user = useSelector((store: AppStore) => store.user);
  const notifications = useSelector((store: AppStore) => store.notification);

  const { data } = useSWR(
    getNotificationsUrl(user.user?.id),
    getNotifications
  );
  useEffect(() => {
    dispatch(addNotification(data));
  }, [notifications]);

  // useEffect(() => {
  //   dispatch(addNotification(user.user?.receivedNotifications as Notification[]));
  // }, [user]);

  const values = {};

  return (
    <BrokerUserContext.Provider value={values}>
      {children}
    </BrokerUserContext.Provider>
  );
};

export const useBrokerUserContext = () => {
  const context = useContext(BrokerUserContext);
  if (!context) {
    throw new Error("useBrokerUser can only be used inside BrokerUserProvider");
  }

  return context;
};
