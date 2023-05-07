import { describe, expect } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { querySlice } from '../features/querySlice';

describe('query slice', () => {
  it('should update query', () => {
    const store = configureStore({
      reducer: {
        query: querySlice.reducer,
      },
    });
    store.dispatch(querySlice.actions.updateQuery('hello'));
    const state = store.getState().query;
    expect(state.value).toEqual('hello');
  });
});
