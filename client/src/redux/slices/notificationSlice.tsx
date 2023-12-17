import {
  Ids,
  Notification
} from "@/models";
import { baseUrl } from "@/pages";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyNotificationState: Notification[] = [];
export const receivedNotifications: Notification[] = [];

export const notificationSlice = createSlice({
  name: "notification",
  initialState: EmptyNotificationState,
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<Notification[] | undefined>
    ) => {
      return action.payload;
    },
    addNewNotification: (state, action: PayloadAction<Notification>) => {
      return [...state, action.payload];
    },
    updateNotification: (state, action: PayloadAction<Notification>) => {
      const arr = state.map((el) => {
        if (el.id === action.payload.id) {
          el = action.payload;
        }

        return el;
      });
      // notificationsPersistLocalStorage(clientKey, arr);
      return arr;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(addNewNotificationWithOptionsAsync.fulfilled, () => {});
    builder.addCase(addNotificationsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewNotificationAsync.fulfilled, () => {});
    builder.addCase(updateNotificationAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateNotificationAllReadAsync.fulfilled, () => {});
    builder.addCase(addBrokerAsync.fulfilled, () => {});
  },
});

export const addNotificationsAsync = createAsyncThunk(
  "notification/addNotificationsAsync",
  async (userId: string | undefined) => {
    const notifications = await axios(
      `${baseUrl}/user/notifications/${userId}`
    );
    return notifications.data;
  }
);

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
    await axios.put(`${baseUrl}/notification/${notification.id}`, notification);
  }
);
export const updateNotificationAllReadAsync = createAsyncThunk(
  "notification/updateNotificationAllReadAsync",
  async (userId?: string) => {
    const notis = await axios(`${baseUrl}/asset/all-read/${userId}`);
    return notis.data;
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
