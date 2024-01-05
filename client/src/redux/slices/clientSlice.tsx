import {
  BrokerUser,
  ClientInfo,
  Ids,
  RefreshToken,
  UpdateMyProfile,
} from "@/models/interfaces/userInfo/userInfo.interface";
import { baseUrl } from "@/pages";
import {
  modalToast,
  modalToastError,
} from "@/services/sharing-information.service";
import { persistLocalStorage, clearLocalStorage } from "@/utilities";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";


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
export const cookieKey = 'loginGoogle'

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
    updateClient: (state, action: PayloadAction<{ brokerUser: string[] }>) => {
      const result = { ...state, ...action.payload };
      return result;
    },
    resetClient: () => {
      clearLocalStorage(clientKey);
      Cookies.remove(cookieKey);
      return EmptyUserState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      updateLastRecordAsync.fulfilled,
      (state, action: PayloadAction<string | undefined>) => {
        if (action.payload) {
          persistLocalStorage<ClientInfo>(clientKey, {
            ...state,
            user: { ...state.user, lastRecord: action.payload },
          });
          return {
            ...state,
            user: { ...state.user, lastRecord: action.payload },
          };
        }
      }
    );
    builder.addCase(
      updateMyProfileAsync.fulfilled,
      (
        state: ClientInfo,
        action: PayloadAction<UpdateMyProfile | undefined>
      ) => {
        if (action.payload) {
          persistLocalStorage<ClientInfo>(clientKey, {
            ...state,
            user: {
              ...state.user,
              phoneNumber: action.payload.phoneNumber
                ? action.payload.phoneNumber
                : state.user?.phoneNumber,
              address: action.payload.address
                ? action.payload.address
                : state.user?.address,
            },
          });
          return {
            ...state,
            user: {
              ...state.user,
              phoneNumber: action.payload.phoneNumber
                ? action.payload.phoneNumber
                : state.user?.phoneNumber,
              address: action.payload.address
                ? action.payload.address
                : state.user?.address,
            },
          };
        }
      }
    );
    builder.addCase(
      updateTokenAsync.fulfilled,
      (state, action: PayloadAction<RefreshToken | undefined>) => {
        persistLocalStorage<ClientInfo>(clientKey, {
          ...state,
          accessToken: action.payload?.accessToken,
          exp: action.payload?.exp,
        });
        return {
          ...state,
          accessToken: action.payload?.accessToken,
          exp: action.payload?.exp,
        };
      }
    );
    builder.addCase(
      addBrokerAsync.fulfilled,
      (state, action: PayloadAction<BrokerUser[] | undefined>) => {
        persistLocalStorage<ClientInfo>(clientKey, {
          ...state,
          user: {
            ...state.user,
            brokerUser: action.payload,
          },
        });
        return {
          ...state,
          user: {
            ...state.user,
            brokerUser: action.payload,
          },
        };
      }
    );
  },
});

export const updateLastRecordAsync = createAsyncThunk(
  "notification/updateLastRecord",
  async (userId?: string) => {
    try {
      const date = new Date().toISOString();
      await axios.post(`${baseUrl}/user/last-record/${userId}?date=${date}`);
      return date;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateMyProfileAsync = createAsyncThunk(
  "notification/updateMyProfileAsync",
  async ({ userId, phoneNumber, address }: UpdateMyProfile) => {
    try {
      await axios(
        `${baseUrl}/user/profile/${userId}?phoneNumber=${phoneNumber}&address=${address}`
      );
      modalToast.setSubject(true);
      return { userId, phoneNumber, address };
    } catch (error) {
      modalToastError.setSubject(true);
    }
  }
);

export const updateTokenAsync = createAsyncThunk(
  "notification/updateTokenAsync",
  async (id: string) => {
    try {
      const newToken: RefreshToken = await axios(
        `${baseUrl}/auth/refresh-token/${id}`
      );
      // modalToast.setSubject(true);

      return newToken;
    } catch (error) {
      // modalToastError.setSubject(true);
    }
  }
);

export const addBrokerAsync = createAsyncThunk(
  "notification/addBrokerAsync",
  async ({ clientId, userBrokerId }: Ids) => {
    try {
      const brokers = await axios.post(
        `${baseUrl}/user-in-broker/${userBrokerId}/${clientId}`
      );
      return brokers.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const { addClient, updateClient, resetClient } = clientSlice.actions;

export default clientSlice.reducer;
