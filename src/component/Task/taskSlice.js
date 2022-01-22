import { createSlice } from "@reduxjs/toolkit";
import { ColumnsList } from "./taskList";


const initialState = {
  ColumnsList,
};

const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    updateColumnList: (state, action) => {
      state.ColumnsList = action.payload;
    },
  },
});


export const {updateColumnList} = taskSlice.actions;

export const SelectColumnList = (state) => {
   return state.task.ColumnsList
  }; 

export default taskSlice.reducer;