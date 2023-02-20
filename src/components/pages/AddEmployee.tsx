import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { authActions } from "../../redux/authSlice";
import { employeesAction } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";

export const AddEmployee: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const auth: string = useSelector<any, string>(state => state.auth.authenticated);
    const dispatch = useDispatch();
    return <Stack sx={{ width: "30vw" }}>
        <Button onClick={() => dispatch(employeesAction.addEmployee(createRandomEmployee(employees)))}
            disabled={auth.includes('admin') ? false : true} >Add employee</Button>
    </Stack>
}