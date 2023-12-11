import { Notification } from "@/models";
import { NotificationResponse } from "@/models/types/notification-response.enum";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyNotificationState: { receivedNotifications: Notification[] } =
  {
    receivedNotifications: [],
  };

export const notificationSlice = createSlice({
  name: "notification",
  initialState: EmptyNotificationState,
  reducers: {
    addNewNotification: (state, action) => {
      return { ...state, receivedNotifications: action.payload };
    },
    updateNotification: (state, action) => {
      const arr = state.receivedNotifications.map((el) => {
        if (el.id === action.payload.id) {
          el = action.payload
        }

        return el;
      });
      const result = { ...state, receivedNotifications: arr };
      return result;
    },

  },
});

export const { addNewNotification, updateNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
