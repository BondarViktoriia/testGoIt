import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/usersSlice';

import { combineReducers } from '@reduxjs/toolkit';

const appReducer = combineReducers({
    users: usersReducer,

});

export const store = configureStore({
  reducer: appReducer,
});