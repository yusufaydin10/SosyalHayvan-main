import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todo",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    appendTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { setTodos, appendTodo } = todo.actions;
export default todo.reducer;
