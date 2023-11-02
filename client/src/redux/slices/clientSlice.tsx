import { persistLocalStorage, clearLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState: ClientInfo = {
  accessToken: "",
  user: {
    id: "",
    creater_at: "",
    updated_at: "",
    name: "",
    lastName: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    altEmail: "",
    gender: "",
    dni: "",
    address: "",
    role: "",
  },
  exp: 0
};

export const clientKey = 'client'

export const clientSlice = createSlice({
  name: "client",
  initialState: localStorage.getItem("client")
    ? JSON.parse(localStorage.getItem("client") as string)
    : EmptyUserState,
  reducers: {
    addClient: (state, action) => {
      persistLocalStorage<ClientInfo>(clientKey, action.payload);
      console.log('hhh')
      return action.payload;
    },
    updateClient: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<ClientInfo>(clientKey,result);
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
