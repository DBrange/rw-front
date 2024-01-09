import { Notification } from "@/models";
import { baseUrl } from "@/pages";
import { accessToken } from "@/pages/private/utilities/accesToken.utility";
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
      if (action.payload) {
        return action.payload;
      }
    });
    builder.addCase(addNewNotificationAsync.fulfilled, () => {});
    builder.addCase(updateNotificationAsync.fulfilled, () => {});
    builder.addCase(updateNotificationAllReadAsync.fulfilled, () => {});
    // builder.addCase(addBrokerAsync.fulfilled, (state, action) => {

    // });
  },
});

const config = {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    rw_token: accessToken as string,
  },
};

export const addNotificationsAsync = createAsyncThunk(
  "notification/addNotificationsAsync",
  async (userId: string | undefined) => {
    try {
      const notifications = await axios(
        `${baseUrl}/user/notifications/${userId}?page=${1}&limit=${20}`,
        config
      );
      return notifications.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addNewNotificationAsync = createAsyncThunk(
  "notification/addNewNotificationAsync",
  async (notification: Notification) => {
    try {
      await axios.post(`${baseUrl}/user-in-broker`, notification, config);
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateNotificationAsync = createAsyncThunk(
  "notification/updateNotificationAsync",
  async (notification: Notification & { mutate: any }) => {
    const {mutate,id, ...rest} = notification
    try {
      await axios.put(
        `${baseUrl}/notification/${id}`,
        notification,config
      );
      notification.mutate()
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateNotificationAllReadAsync = createAsyncThunk(
  "notification/updateNotificationAllReadAsync",
  async (userId?: string) => {
    try {
      const notis = await axios(`${baseUrl}/asset/all-read/${userId}`, config);
      return notis.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// export const addBrokerAsync = createAsyncThunk(
//   "notification/addBrokerAsync",
//   async ({ clientId, userBrokerId }: Ids) => {
//     try {
//       const brokers = await axios.post(`${baseUrl}/user-in-broker/${userBrokerId}/${clientId}`);
//       return brokers
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const { addNotification, addNewNotification, updateNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
