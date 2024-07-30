import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    value: AuthState
}

type AuthState = {
    isAuth: boolean
    username: string
    uid: string
    isMod: boolean
}

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isMod: false
    }
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            return initialState
        },
        login: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "sk23h834kj23h42",
                    isMod: false
                }
            }
        },
        toggleModerator: (state) => {
            state.value.isMod = !state.value.isMod 
        }
    }
})

export const {login, logout, toggleModerator} = auth.actions
export default auth.reducer