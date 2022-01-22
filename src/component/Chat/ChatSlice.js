import { createSlice } from "@reduxjs/toolkit";
import {messages, users} from "./data";


const initialState = {
  messages,
  users,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    UpdateMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});


export const {UpdateMessages} = chatSlice.actions;

export const SelectMessages = (state) => state.chat.messages; 
export const SelectUsers = (state) => state.chat.users; 

export default chatSlice.reducer;