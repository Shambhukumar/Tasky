import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from "../component/Task/taskSlice"
import chatReducer from "../component/Chat/ChatSlice";
import LoggedInReducer from '../component/LoggedInUserSplice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    chat: chatReducer,
    user: LoggedInReducer
  },
});
