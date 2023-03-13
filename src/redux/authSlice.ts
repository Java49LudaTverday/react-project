import { createSlice } from "@reduxjs/toolkit";
import { CodeType } from "../models/CodeType";
import { LoginData } from "../models/LoginData";
import { AuthServiceFirebase } from "../service/AuthServiceFirebase";
import { codeActions } from "./codeSlice";

const authService = new AuthServiceFirebase();
const initialState: { authenticated: string } = {
    authenticated: localStorage.getItem('auth') || ''
};
const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setAuth: (state, data) => {
            state.authenticated = data.payload;
        }
    }
})

const actions = authSlice.actions;
export const authAction: any = {
    login: (loginData: LoginData) => {
        return async (dispatch: any) => {
            try {
               const authUser = await authService.login(loginData); 
                localStorage.setItem("auth", authUser);
                dispatch(codeActions.setCode("OK"));
                dispatch(actions.setAuth(authUser));
            } catch(e: any) {
                dispatch(codeActions.setCode("Credentials Error"));

            }
           
        }
    },
    logout: () => {
        return async (dispatch: any) => {
            await authService.logout();
            localStorage.setItem('auth', '');
            dispatch(actions.setAuth(''))
        }
    }
}
export const authReducer = authSlice.reducer;
