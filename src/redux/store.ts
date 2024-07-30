import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        authReducer,
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector