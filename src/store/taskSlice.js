import { createSlice } from "@reduxjs/toolkit";
const TaskSlice = createSlice({
  name: "task",
  initialState: {
    todo: [],
    inProgress: [],
    closed: [],
  },
  reducers: {
    setTodo(state, action) {
      state.todo = action.payload;
    },
    setInProgress(state, action) {
      state.inProgress = action.payload;
    },
    setClosed(state, action) {
      state.closed = action.payload;
    },
    removeTask(state, action) {
      console.log(action.payload, "removeTask");

      console.log(action.payload, action.payload.status);
      let tempArray = state[action.payload.status].filter((item) => {
        console.log(item.id);
        return item.id !== action.payload.id;
      });
      state[action.payload.status] = tempArray;
    },

    //     status
    // :
    // "inProgress"
    // task
    // :
    // {task: 'test2', id: 2, status: 'todo'}
    addTask(state, action) {
      console.log(action.payload, "addTask");
      if (!action.payload.drop) {
        console.log("if");
        state.todo.push(action.payload);
      } else {
        console.log("else");
        let tempArray;

        let item = { ...action.payload.task };
        item.status = action.payload.status;
        //item.id = Math.floor(Math.random() * 10000);
        console.log(item);
        state[action.payload.status].push(item);
      }
    },
  },
});

export default TaskSlice;

export const taskAction = TaskSlice.actions;
