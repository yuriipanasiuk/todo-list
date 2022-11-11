import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constans';

const filterInitialState = {
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
