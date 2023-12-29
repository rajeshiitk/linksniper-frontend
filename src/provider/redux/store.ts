import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user.slice";
import { authApi } from "./queries/auth.query";
import { setupListeners } from "@reduxjs/toolkit/query";
import { linkApi } from "./queries/link.query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [linkApi.reducerPath]: linkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(linkApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
