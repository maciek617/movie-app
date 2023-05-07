import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { QueryState } from '../interfaces';

const initialState: QueryState = {
  value: '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateQuery } = querySlice.actions;

export default querySlice.reducer;
