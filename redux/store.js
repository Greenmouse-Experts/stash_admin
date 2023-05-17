import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from "redux-persist";
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from "redux-persist/lib/storage";
import { RESET_STATE_ACTION_TYPE } from "./actions/resetState";
import { apiSlice, rtkQueryErrorLogger } from "@/services/apiSlice";
import authReducer from "./reducers/authSlice"
import userReducer from "./reducers/userSlice";

const reducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userReducer,
  };

  const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ['auth'],
  };

  const combinedReducer = combineReducers(reducers);

  export const rootReducer = (state, action) => {
    if (action.type === RESET_STATE_ACTION_TYPE) {
      state = {} ;
    }
    return combinedReducer(state, action);
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([
        // add middlewares here
        rtkQueryErrorLogger,
        apiSlice.middleware,
      ]),
  });
  setupListeners(store.dispatch)
  export const persistor = persistStore(store);