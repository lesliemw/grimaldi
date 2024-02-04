"use client";

import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator,
  },
});

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userSlice = createSliceWithThunks({
  name: "user",
  initialState,
  reducers: (create) => ({
    fetchUser: create.asyncThunk(
      async (_, thunkApi) => {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        console.log(userData);
        return userData;
      },
      {
        pending: (state) => {
          (state.loading = true), (state.error = null);
        },
        fulfilled: (state, action) => {
          state.loading = false;
          state.data = action.payload;
        },
        rejected: (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
      }
    ),
  }),
});

export const { fetchUser } = userSlice.actions;
export default userSlice.reducer;
