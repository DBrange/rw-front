import {configureStore} from '@reduxjs/toolkit'
import clientSliceReducer  from './slices/clientSlice'

export interface AppStore {
  user: ClientInfo
}

export default configureStore<AppStore>({
  reducer: {
    user: clientSliceReducer,
  },
});