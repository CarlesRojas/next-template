import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {};

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState: initalState,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
