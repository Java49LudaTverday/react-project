import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { employeesAction } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";

export const AddEmployee: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const dispatch = useDispatch();    
return <Stack>
    <Button onClick={() => dispatch(employeesAction.addEmployee(createRandomEmployee(employees))) }>Add employee</Button>
</Stack>
}