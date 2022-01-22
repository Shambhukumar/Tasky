import { createSlice } from "@reduxjs/toolkit";
import Pic1 from "../Assets/Images/Pic1.jpg";


const initialState = {
  LoggedUser: {
      isAutheticated: true,
      UserName: "Jake",
      image: Pic1,
      
  }
};

const LoggedInUser = createSlice({
  name: "user",
  initialState,

  reducers: {
    logOutUser: (state, action) => {
     
    },
  },
});


export const {logOutUser} = LoggedInUser.actions;

export const SelectUser = (state) => state.user.LoggedUser; 


export default LoggedInUser.reducer;