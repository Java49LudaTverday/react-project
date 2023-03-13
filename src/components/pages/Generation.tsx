import { Alert, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { Employee } from "../../models/Employee";
import { employeesAction } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { GenerationForm } from "../forms/GenerationForm";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";

export const Generation: React.FC = () => {
     const dispatch = useDispatch<any>();
     const [numEmpl, setNumEmpl] = useState(0);

     return <Box>
           <GenerationForm submitFn={(numEmployee: number) => {
               // const employeesAr: Employee[] = 
               // Array.from(numEmployee as any).map (_ => createRandomEmployee());
               // dispatch(employeesAction.addBulkEmployees(employeesAr));
               console.log(numEmployee)
               // const employeesAr: Employee[] =[]
               // for (let i: number = 0; i < numEmployee; i++) {
               //      let employeesRandom: Employee = createRandomEmployee();
               //      employeesAr.push(employeesRandom);
               //     // dispatch(employeesAction.addEmployee(employeesRandom));
               // }
               const employeesAr: Employee[] = 
               Array.from({length: numEmployee}, (_)=> createRandomEmployee());
               dispatch(employeesAction.addBulkEmployees(employeesAr));
               setNumEmpl(numEmployee);
               setTimeout(() => {
                             setNumEmpl(0);
                             }, 4000)
          }} />
           {!!numEmpl && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success"
          > {numEmpl} employees was successe generated</Alert>}
     </Box>
}