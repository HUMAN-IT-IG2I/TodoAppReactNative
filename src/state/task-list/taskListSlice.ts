import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type Task = {
  id: number;
  content: string;
  creationDate: Date;
  isActive: boolean;
};

export type TaskListState = Task[];

const initialState: TaskListState = [
  {
    id: 0,
    content: 'Benchmark cross-plateform development',
    creationDate: new Date(),
    isActive: false,
  },
  {
    id: 1,
    content: 'Create a Todo App using Flutter',
    creationDate: new Date(),
    isActive: false,
  },
  {
    id: 2,
    content: 'Create a Todo App using React Native',
    creationDate: new Date(),
    isActive: true,
  },
  {
    id: 3,
    content: 'Create a Todo App using Ionic',
    creationDate: new Date(),
    isActive: true,
  },
];

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push({
        id: getLastUsedId(state) + 1,
        content: action.payload,
        creationDate: new Date(),
        isActive: true,
      });
    },
  },
});

const getLastUsedId = (state: TaskListState): number => {
  const ids = state.map(task => task.id).sort();
  return ids.length === 0 ? 0 : ids[ids.length - 1];
};

export const {add} = taskListSlice.actions;

export const selectTasks = (state: RootState) => state.taskList;

export const taskListReducer = taskListSlice.reducer;
