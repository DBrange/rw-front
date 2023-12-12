import { Notification } from "@/models";
import { baseUrl } from "@/pages";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyNotificationState: { receivedNotifications: Notification[] } =
  {
    receivedNotifications: [],
  };

export const notificationSlice = createSlice({
  name: "notification",
  initialState: EmptyNotificationState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification[]>) => {
      return { ...state, receivedNotifications: action.payload };
    },
    addNewNotification: (state, action: PayloadAction<Notification>) => {
      return { ...state, receivedNotifications: [...state.receivedNotifications,action.payload] };
    },
    updateNotification: (state, action: PayloadAction<Notification>) => {
      const arr = state.receivedNotifications.map((el) => {
        if (el.id === action.payload.id) {
          el = action.payload;
        }

        return el;
      });

      const result = { ...state, receivedNotifications: arr };
      return result;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateNotificationAsync.fulfilled, () => {});
  },
});

export const addNewNotificationAsync = createAsyncThunk(
  "notification/updateNotificationAsync",
  async (notification: Notification) => {

    await axios.post(`${baseUrl}/notification/${notification.id}`, notification);
  }
);

export const updateNotificationAsync = createAsyncThunk(
  "notification/updateNotificationAsync",
  async (notification: Notification) => {
    await axios.put(`${baseUrl}/notification/${notification.id}`, notification);
  }
);

export const { addNotification,addNewNotification, updateNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
