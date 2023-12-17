import { createContext, useContext, useEffect, useState } from "react";
import { IBrokerUserContext } from ".";
import { emptyBrokerUserContext } from "./empty-BrokerUser-context";
import { AppDispatch, AppStore } from "@/redux";
import { addNotification } from "@/redux/slices/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "@/models";
import useSWR from "swr";
import {
  getNotificationsUrl,
  getNotifications,
  DashBoardInfoUrl,
  getDashBoardInfo,
} from "../services/get-dashboard-information.service";
import { DashboardInfo } from "../interfaces/dashboard.interface";
import { updateLastRecordAsync } from "@/redux/slices/clientSlice";

export const BrokerUserContext = createContext<IBrokerUserContext>(
  emptyBrokerUserContext
);

type ChildrenType = {
  children: React.ReactElement[] | React.ReactElement;
};

export const BrokerUserProvider = ({ children }: ChildrenType) => {
  const dispatch = useDispatch();
  const dispatchAsyc = useDispatch<AppDispatch>();
  const [dataToDashboard, setDataToDashboard] = useState<DashboardInfo>();

  const user = useSelector((store: AppStore) => store.user);
  const notifications = useSelector((store: AppStore) => store.notification);

  const { data: notificationsData } = useSWR(
    getNotificationsUrl(user.user?.id),
    getNotifications
  );

  const { data: dashboardData } = useSWR(
    DashBoardInfoUrl(user.user?.id, user.user?.userBroker?.id),
    getDashBoardInfo
  );

  const newData = (date: Date) => {
    if (user?.user?.lastRecord) {
      const lastConnection = new Date(user.user?.lastRecord).getTime();
      const objectDate = new Date(date).getTime();
      
      const boolean = objectDate > lastConnection;
      return boolean;
    }
  };

  const lastConnection = new Date(user.user?.lastRecord as Date).getTime();
  const objectDate = new Date().getTime();
  
  useEffect(() => {
    // setTimeout(() => {
      
      dispatchAsyc(updateLastRecordAsync(user.user?.id));
    // }, 2000);

  },[])

  useEffect(() => {
    setDataToDashboard(dashboardData);
  }, [dashboardData]);

  useEffect(() => {
    dispatch(addNotification(notificationsData));
  }, [notifications]);

  // useEffect(() => {
  //   dispatch(addNotification(user.user?.receivedNotifications as Notification[]));
  // }, [user]);

  const values = { dataToDashboard, newData };

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
