import { ClientInfo } from "@/models/interfaces/userInfo/userInfo.interface";
import { baseUrl } from "@/pages";
import { persistLocalStorage, clearLocalStorage } from "@/utilities";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyUserState: ClientInfo = {
  accessToken: undefined,
  user: {
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    phoneNumber: undefined,
    email: undefined,
    altEmail: undefined,
    address: undefined,
    lastRecord: undefined,
    role: undefined,
    accessLevel: undefined,
    authorization: undefined,
    personalUser: undefined,
    legalUser: undefined,
    broker: undefined,
    userBroker: undefined,
    brokerUser: undefined,
    // receivedNotifications: [],
  },
  exp: 0,
};

export const clientKey = "client";

export const clientSlice = createSlice({
  name: "client",
  initialState: localStorage.getItem("client")
    ? JSON.parse(localStorage.getItem("client") as string)
    : EmptyUserState,
  reducers: {
    addClient: (state, action: PayloadAction<ClientInfo>) => {
      persistLocalStorage<ClientInfo>(clientKey, action.payload);
      return { ...state, ...action.payload };
    },
    updateClient: (state, action: PayloadAction<{ brokerUser: string }>) => {
      const result = { ...state, ...action.payload };
      return result;
    },
    resetClient: () => {
      clearLocalStorage(clientKey);
      return EmptyUserState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      updateLastRecordAsync.fulfilled,
      (state, action: PayloadAction<string>) => {
        persistLocalStorage<ClientInfo>(clientKey, {
          ...state,
          lastRecord: action.payload,
        });
        return { ...state, user: { ...state.user, lastRecord: action.payload } };
      }
    );
  },
});

export const updateLastRecordAsync = createAsyncThunk(
  "notification/updateLastRecord",
  async (userId?: string) => {
    const date = new Date().toISOString();
    await axios.post(`${baseUrl}/user/last-record/${userId}?date=${date}`);
    return date;
  }
);
export const { addClient, updateClient, resetClient } = clientSlice.actions;

export default clientSlice.reducer;
