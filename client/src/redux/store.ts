import { ClientInfo, Notification } from "@/models/interfaces/userInfo/userInfo.interface";
import { configureStore } from "@reduxjs/toolkit";
import clientSliceReducer from "./slices/clientSlice";
import notificationSliceReducer from "./slices/notificationSlice";

export interface AppStore {
  user: ClientInfo;
  notification: Notification[];
}

export const store = configureStore<AppStore>({
  reducer: {
    user: clientSliceReducer,
    notification: notificationSliceReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
