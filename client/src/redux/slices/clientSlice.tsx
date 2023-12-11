import { ClientInfo } from "@/models/interfaces/userInfo/userInfo.interface";
import { persistLocalStorage, clearLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: ClientInfo = {
  accessToken: undefined,
  user: {
  id: undefined,
  creater_at: undefined,
  updated_at: undefined,
  phoneNumber: undefined,
  email: undefined,
  altEmail: undefined,
  address: undefined,
  role: undefined,
  accessLevel: undefined,
  authorization: undefined,
  personalUser: undefined,
  legalUser: undefined,
  broker: undefined,
  userBroker: undefined,
  receivedNotifications: [],
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
    addClient: (state, action) => {
      persistLocalStorage<ClientInfo>(clientKey, action.payload);
      return { ...state, ...action.payload };
    },
    updateClient: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<ClientInfo>(clientKey, result);
      return result;
    },
    resetClient: () => {
      clearLocalStorage(clientKey);
      return EmptyUserState;
    },
    
  },
});

export const { addClient, updateClient, resetClient } = clientSlice.actions;

export default clientSlice.reducer;
