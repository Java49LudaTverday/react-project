import { Alert, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { employeesAction } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { GenerationForm } from "../forms/GenerationForm";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";

export const Generation: React.FC = () => {
     const dispatch = useDispatch();
     const [numEmpl, setNumEmpl] = useState(0);

     return <Box>
           <GenerationForm submitFn={(numEmployee: number) => {
               console.log(numEmployee)
               for (let i: number = 0; i < numEmployee; i++) {
                    let employeesRandom: Employee = createRandomEmployee();
                    dispatch(employeesAction.addEmployee(employeesRandom));
                    if (i == (numEmployee-1) ) {
                         setNumEmpl(numEmployee);
                         setTimeout(() => {
                             setNumEmpl(0);
                             }, 4000)
                    }
               }
          }} />
           {!!numEmpl && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success"
          > {numEmpl} employees was successe generated</Alert>}
     </Box>
}