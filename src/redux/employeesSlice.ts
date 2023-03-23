import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../models/Employee";
import { Company } from "../service/Company";
import { CompanyFirebase } from "../service/CompanyFirebase";
import { codeActions } from "./codeSlice";

export const company = new CompanyFirebase();
const initialState: { employees: Employee[] } = {
    employees: []
}
const employeesSlice = createSlice({
    initialState: initialState,
    name: "employees",
    reducers: {
        setEmployees: (state, data) => {
            state.employees = data.payload;
        }

    }
})


export const employeesReducer = employeesSlice.reducer;
// export function addEmployee(empl: Employee): (dispatch: any) => void {
//     return async (dispatch) => {

//     }
// }
export const { setEmployees } = employeesSlice.actions;
export const employeesAction: any = {
    addEmployee: (empl: Employee) => {
        return async (dispatch: any) => {
            try {
                await company.addEmployee(empl);
                // const employees = await company.getAllEmployees();
                dispatch(codeActions.setCode("OK"));
                //dispatch(actions.setEmployees(employees));
            } catch (e) {
                dispatch(codeActions.setCode("Authorization Error"))
            }
        }
    },
    updateEmployee: (empl: Employee) => {
        return async (dispatch: any) => {
            try {
                await company.updateEmployee(empl);
                //const employees = await company.getAllEmployees();
                dispatch(codeActions.setCode("OK"));
                //  dispatch(actions.setEmployees(employees));
            } catch (e) {
                dispatch(codeActions.setCode("Authorization Error"))
            }

        }
    },
    removeEmployee: (id: number) => {
        return async (dispatch: any) => {
            try {
                await company.removeEmployee(id);
                // const employees = await company.getAllEmployees();
                dispatch(codeActions.setCode("OK"));
                //  dispatch(actions.setEmployees(employees));
            } catch (e) {
                dispatch(codeActions.setCode("Authorization Error"))
            }

        }
    },
    // getEmployees: () => {
    //     return async (dispatch: any) => {
    //         try {
    //             const employees = await company.getAllEmployees();
    //             dispatch(codeActions.setCode("OK"));
    //             dispatch(actions.setEmployees(employees));
    //         } catch (e) {
    //             dispatch(codeActions.setCode("Unknown Error"))
    //         }

    //     }
    // },
    addBulkEmployees: (employeesAr: Employee[]) => {
        return async (dispatch: any) => {
            employeesAr.forEach(async (empl) => {
                try {
                    await company.addEmployee(empl);
                    dispatch(codeActions.setCode("OK"));
                } catch (e) {
                    dispatch(codeActions.setCode("Authorization Error"))
                }
            }
            );
            // const employees = await company.getAllEmployees();

            // dispatch(actions.setEmployees(employees));


        }
    }

}



// addEmployee: (state, data) => {
//             company.addEmployee(data.payload);
//             state.employees = company.getAllEmployees();
//         },
//         deleteEmployee: (state, data) => {
//             const newEmployees: Employee[] = state.employees.filter(( empl: Employee) => !data.payload.includes(empl.id) );
//             state.employees = newEmployees;
//         },
//         removeEmployee: (state, data) => {
//             company.removeEmployee(data.payload);
//             state.employees = company.getAllEmployees();
//         },
//         updateEmployee: (state, data) => {
//             company.updateEmployee(data.payload);
//             state.employees = company.getAllEmployees();
//         }
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