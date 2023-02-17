import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../models/Employee";


const initialState: { employees: Employee[] } = {
    employees: []
}
const employeesSlice = createSlice({
    initialState: initialState,
    name: "employees",
    reducers: {
        addEmployee: (state, data) => {
            state.employees.push(data.payload);
        },
        deleteEmployee: (state, data) => {
            const newEmployees: Employee[] = state.employees.filter(( empl: Employee) => !data.payload.includes(empl.id) );
            state.employees = newEmployees;
        }

    }
})
export const employeesAction = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;



 // let newEmployees: Employee[] = state.employees.slice();
            //   newEmployees.forEach((empl,ind) => data.payload.includes(empl.id)? state.employees.splice(ind,1): empl
            //      )
              //   console.log(state.employees);
            //    let newEmployees = state.employees.map((empl: Employee) => {
            //         if (!data.payload.includes(empl.id)) {
            //             return empl;
            //         }
            //     }
            //     )
            //     state.employees = newEmployees;