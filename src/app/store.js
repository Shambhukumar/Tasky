import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from "../component/Task/taskSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer
  },
});
