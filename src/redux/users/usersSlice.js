import { createSlice} from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [{id:1,following:15}],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addMatcher(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addMatcher(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(fetchUsers.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const usersReducer = usersSlice.reducer;
