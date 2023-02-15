import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../models/Employee";

const empl: Array<Employee> = []
const initialState = {
    employees: empl
}
const employeesSlice = createSlice({
    initialState : initialState,
    name: "employees",
    reducers: {
        addEmployee: (state, data) => {
            const newEmployees: Array<Employee> = state.employees.slice();
            newEmployees.push(data.payload);
            state.employees = newEmployees;
        }

    }
})
export const employeesAction = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;