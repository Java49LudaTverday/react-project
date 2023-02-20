import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { employeesReducer } from "./employeesSlice";

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
        auth: authReducer

    }
})