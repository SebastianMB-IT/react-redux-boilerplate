import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/User'
import { infoApi } from '../services/Info'
import userReducer from '../features/User'
import infoReducer from '../features/Info'

export const store = configureStore({
  reducer: {
    user: userReducer,
    info: infoReducer,
    [userApi.reducerPath]: userApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(userApi.middleware)
    .concat(infoApi.middleware)
})
