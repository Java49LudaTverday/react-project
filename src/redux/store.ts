import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { codeReduser } from "./codeSlice";
import { employeesReducer } from "./employeesSlice";

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
        auth: authReducer,
        errorCode: codeReduser

    }
})