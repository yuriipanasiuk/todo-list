import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

type Todo = {
  id: string;
  text: string;
  createdAt: number;
  completed: boolean;
};

export const fetchTasks = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>('tasks/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addTask = createAsyncThunk<Todo, string, { rejectValue: string }>(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string }
>('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const toggleComlited = createAsyncThunk<
  Todo,
  Todo,
  { rejectValue: string }
>('tasks/toggleComlited', async (task, thunkAPI) => {
  try {
    const response = await axios.put(`/tasks/${task.id}`, {
      completed: !task.completed,
    });
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
