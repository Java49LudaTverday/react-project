import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    employees: []
}
const employeesSlice = createSlice ({
    initialState,
    name: "employees",
    reducers: {

    }
})
export const employeesAction = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;