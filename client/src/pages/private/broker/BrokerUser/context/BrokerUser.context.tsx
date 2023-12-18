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
  const [buttonActive, setButtonActive] = useState({
    inspection: false,
    sinister: false,
    client: false,
  });

  const user = useSelector((store: AppStore) => store.user);
  const notifications = useSelector((store: AppStore) => store.notification);

  const changeBtnActive = (value: string) => {
    if (value === "inspection") {
      setButtonActive({ inspection: true, sinister: false, client: false });
    } else if (value === "sinister") {
      setButtonActive({ inspection: false, sinister: true, client: false });
    } else if (value === "client") {
      setButtonActive({ inspection: false, sinister: false, client: true });
    }

    if (value === "inspection" && buttonActive.inspection) {
      setButtonActive({ inspection: false, sinister: false, client: false });
    } else if (value === "sinister" && buttonActive.sinister) {
      setButtonActive({ inspection: false, sinister: false, client: false });
    } else if (value === "client" && buttonActive.client) {
      setButtonActive({ inspection: false, sinister: false, client: false });
    }
  };
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

  useEffect(() => {
    // setTimeout(() => {

    dispatchAsyc(updateLastRecordAsync(user.user?.id));
    // }, 2000);
  }, []);

  useEffect(() => {
    setDataToDashboard(dashboardData);
  }, [dashboardData]);

  useEffect(() => {
    dispatch(addNotification(notificationsData));
  }, [notifications]);

  // useEffect(() => {
  //   dispatch(addNotification(user.user?.receivedNotifications as Notification[]));
  // }, [user]);

  const values = {
    dataToDashboard,
    newData,
    buttonActive,
    setButtonActive,
    changeBtnActive,
  };

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
