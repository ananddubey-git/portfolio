import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import adminReducer from './slices/adminSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
