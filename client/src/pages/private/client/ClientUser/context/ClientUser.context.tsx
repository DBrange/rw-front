import { createContext, useContext, useEffect } from "react";
import { IClientUserContext } from ".";
import { emptyClientUserContext } from "./empty-clientUser-context";
import { useDispatch, useSelector } from 'react-redux';
import { addNotification } from "@/redux/slices/notificationSlice";
import { AppStore } from "@/redux";
import { Notification } from "@/models";

export const ClientUserContext = createContext<IClientUserContext>(
  emptyClientUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const ClientUserProvider = ({ children }: ChildrenType) => {
  const dispatch = useDispatch()

  const user = useSelector((store: AppStore) => store.user);
  
  useEffect(() => {
  dispatch(
    addNotification(user.user?.receivedNotifications as Notification[])
  );
  }, [])
  const values = {};

  return (
    <ClientUserContext.Provider value={values}>
      {children}
    </ClientUserContext.Provider>
  );
};

export const useClientUserContext = () => {
  const context = useContext(ClientUserContext);
  if (!context) {
    throw new Error("useClientContext can only be used inside ClientUserProvider");
  }

  return context;
};
