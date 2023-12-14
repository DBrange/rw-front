import {
  ClientInfo,
  Ids,
  Notification,
  NotificationwithOptions,
} from "@/models";
import { baseUrl } from "@/pages";
import {
  notificationsPersistLocalStorage,
  persistLocalStorage,
} from "@/utilities";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { clientKey } from "./clientSlice";

export const EmptyNotificationState: { receivedNotifications: Notification[] } =
  {
    receivedNotifications: [],
  };

export const notificationSlice = createSlice({
  name: "notification",
  initialState: EmptyNotificationState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification[]>) => {
      notificationsPersistLocalStorage(clientKey, action.payload);
      return { ...state, receivedNotifications: action.payload };
    },
    addNewNotification: (state, action: PayloadAction<Notification>) => {
      notificationsPersistLocalStorage(clientKey, [
        ...state.receivedNotifications,
        action.payload,
      ]);
      const result = {
        ...state,
        receivedNotifications: [...state.receivedNotifications, action.payload],
      };
      return result;
    },
    updateNotification: (state, action: PayloadAction<Notification>) => {
      const arr = state.receivedNotifications.map((el) => {
        if (el.id === action.payload.id) {
          el = action.payload;
        }

        return el;
      });
      notificationsPersistLocalStorage(clientKey, arr);
      const result = { ...state, receivedNotifications: arr };
      return result;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(addNewNotificationWithOptionsAsync.fulfilled, () => {});
    builder.addCase(addNewNotificationAsync.fulfilled, () => {});
    builder.addCase(updateNotificationAsync.fulfilled, () => {});
    builder.addCase(addBrokerAsync.fulfilled, () => {});
  },
});

export const addNewNotificationAsync = createAsyncThunk(
  "notification/addNewNotificationAsync",
  async (notification: Notification) => {
    console.log(notification);
    await axios.post(`${baseUrl}/user-in-broker`, notification);
  }
);

export const updateNotificationAsync = createAsyncThunk(
  "notification/updateNotificationAsync",
  async (notification: Notification) => {
    console.log(notification);
    await axios.put(`${baseUrl}/notification/${notification.id}`, notification);
  }
);

export const addBrokerAsync = createAsyncThunk(
  "notification/addBrokerAsync",
  async ({ clientId, userBrokerId }: Ids) => {
    await axios.post(`${baseUrl}/user-in-broker/${userBrokerId}/${clientId}`);
  }
);

export const { addNotification, addNewNotification, updateNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
