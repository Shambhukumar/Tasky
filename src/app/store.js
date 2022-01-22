import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "../component/Task/taskSlice"
import chatReducer from "../component/Chat/ChatSlice";
import LoggedInReducer from '../component/LoggedInUserSplice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    chat: chatReducer,
    user: LoggedInReducer
  },
});
