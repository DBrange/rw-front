import { configureStore } from "@reduxjs/toolkit";
import clientSliceReducer from "./slices/clientSlice";
import notificationSliceReducer from "./slices/notificationSlice";
import { ClientInfo, Notification } from "@/models/interfaces/userInfo/userInfo.interface";

export interface AppStore {
  user: ClientInfo;
  notification: { receivedNotifications: Notification[] };
}

export default configureStore<AppStore>({
  reducer: {
    user: clientSliceReducer,
    notification: notificationSliceReducer,
  },
});
