import {configureStore} from '@reduxjs/toolkit'
import clientSliceReducer  from './slices/clientSlice'
import { ClientInfo } from '@/models/interfaces/userInfo/userInfo.interface';

export interface AppStore {
  user: ClientInfo
}

export default configureStore<AppStore>({
  reducer: {
    user: clientSliceReducer,
  },
});