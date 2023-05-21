import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

interface IFilterState {
  status: string;
}

const initialState: IFilterState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
