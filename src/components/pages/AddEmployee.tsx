import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { authActions } from "../../redux/authSlice";
import { employeesAction } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { EmployeeForm } from "../forms/EmployeeForm";

export const AddEmployee: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const auth: string = useSelector<any, string>(state => state.auth.authenticated);
    const dispatch = useDispatch();
    return <EmployeeForm submitFn={(empl: Employee): boolean => {
        dispatch(employeesAction.addEmployee(empl));
        return true
    } }/>
}