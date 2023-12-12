import { createContext, useContext, useEffect } from "react";
import { IBrokerUserContext } from ".";
import { emptyBrokerUserContext } from "./empty-BrokerUser-context";
import { AppStore } from "@/redux";
import { addNotification } from "@/redux/slices/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "@/models";

export const BrokerUserContext = createContext<IBrokerUserContext>(
  emptyBrokerUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerUserProvider = ({ children }: ChildrenType) => {
  const dispatch = useDispatch();

  const user = useSelector((store: AppStore) => store.user);

  useEffect(() => {
    dispatch(addNotification(user.user?.receivedNotifications as Notification[]));
  }, []);

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
