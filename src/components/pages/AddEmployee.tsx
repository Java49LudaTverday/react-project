import { Alert, Box, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { authAction } from "../../redux/authSlice";
import { codeActions } from "../../redux/codeSlice";
import { employeesAction } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { EmployeeForm } from "../forms/EmployeeForm";

export const AddEmployee: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const auth: string = useSelector<any, string>(state => state.auth.authenticated);
    const dispatch = useDispatch<any>();
    return<Box>        
        <EmployeeForm submitFn={(empl: Employee): boolean => {
        dispatch(employeesAction.addEmployee(empl));
        return true
    } } />
    </Box> 
}