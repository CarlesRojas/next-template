import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { themeSlice } from "./slices/themeSlice";

export const store = configureStore({
    reducer: { theme: themeSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
