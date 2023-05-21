import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleComlited } from './operations';

interface ITasks {
  id: string;
  text: string;
  createdAt: number;
  completed: boolean;
}

interface TaskStore {
  items: ITasks[];
  isLoading: boolean;
  error: string | undefined;
}

const initialState: TaskStore = {
  items: [],
  isLoading: false,
  error: '',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.items = state.items.filter(task => task.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggleComlited.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleComlited.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleComlited.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const taskReducer = taskSlice.reducer;
