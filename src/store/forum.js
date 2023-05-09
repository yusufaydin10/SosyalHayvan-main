import { createSlice } from "@reduxjs/toolkit";

const forum = createSlice({
  name: "forum",
  initialState: {
    option:  "Köpekler"
  },
  reducers: {
   option: (state, action) => {
        state.option = action.payload;
        }
  },
});

export const { option} = forum.actions;
export default forum.reducer;
