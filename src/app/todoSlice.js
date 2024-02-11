import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: v4(), label: "TypeScript" },
      { id: v4(), label: "React" },
      { id: v4(), label: "Redux-toolkit" },
    ],
    inputTaskValue: "",
    selectedEditTask: undefined,
  },
  reducers: {
    addTask: state => {
      const newTask = {
        id: v4(),
        label: state.inputTaskValue,
      };
      if (state.inputTaskValue.length) {
        state.todos.push(newTask);
      }
      state.inputTaskValue = "";
    },
    deleteTask: (state, action) => {
      const idxTask = state.todos.findIndex(task => task.id === action.payload);
      state.todos.splice(idxTask, 1);
    },
    editTask: (state, action) => {
      const currentTask = {
        id: action.payload.id,
        label: action.payload.label,
      };
      state.inputTaskValue = currentTask.label;
      state.selectedEditTask = currentTask;
    },
    editAddTask: state => {
      const arr = state.todos.filter(
        e => e.id === state.selectedEditTask.id
      )[0];
      const index = state.todos.indexOf(arr);
      state.todos[index] = {
        ...state.selectedEditTask,
        label: state.inputTaskValue,
      };
      state.inputTaskValue = "";
      state.selectedEditTask = "";
    },
    updateValue: (state, action) => {
      state.inputTaskValue = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateValue, editTask, editAddTask } =
  todoSlice.actions;

export default todoSlice.reducer;
