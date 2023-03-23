import { Alert, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { employeesAction } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { GenerationForm } from "../forms/GenerationForm";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { codeActions } from "../../redux/codeSlice";
import { CodeType } from "../../models/CodeType";

export const Generation: React.FC = () => {
     const dispatch = useDispatch<any>();
     const [numEmpl, setNumEmpl] = useState(0);
     const codeError: CodeType = useSelector<any, CodeType>((state) => state.errorCode.code);

     return <Box>
          <GenerationForm submitFn={(numEmployee: number) => {
               console.log(numEmployee);               
               const employeesAr: Employee[] =
                    Array.from({ length: numEmployee }, (_) => createRandomEmployee());
               dispatch(employeesAction.addBulkEmployees(employeesAr));
               setTimeout(()=> {
                    setNumEmpl(numEmployee);                     
               }, 400);           
               setTimeout(() => {
                     dispatch(codeActions.setCode('OK'));
                    setNumEmpl(0);                                        
               }, 4000)
          }} />
          {!!numEmpl && <Alert icon={<CheckIcon fontSize="inherit" />} severity={codeError !== "OK" ? 'error' : 'success'}
          >{codeError !== "OK" ? `${codeError}` : `${numEmpl} employees was successe generated `} </Alert>}
     </Box>
}

// const employeesAr: Employee[] =
// Array.from(numEmployee as any).map (_ => createRandomEmployee());
// dispatch(employeesAction.addBulkEmployees(employeesAr));
// const employeesAr: Employee[] =[]
               // for (let i: number = 0; i < numEmployee; i++) {
               //      let employeesRandom: Employee = createRandomEmployee();
               //      employeesAr.push(employeesRandom);
               //     // dispatch(employeesAction.addEmployee(employeesRandom));
               // }