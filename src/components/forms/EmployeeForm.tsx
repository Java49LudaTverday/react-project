import React, { useState } from "react";
import { FormControl, TextField, InputLabel, Select, Box, MenuItem, Button } from "@mui/material";
import employeeConfig from '../../config/employee-config.json';
import { Employee } from "../../models/Employee";
import './employeeForm.css';

type Props = {
    submitFn: (empl: Employee) => boolean;
    employeeUpdate?: Employee;
}
const initialEmployee: Employee = {
    id: 0, birthDate: '', name: '',
    department: '', salary: 0
}
export const EmployeeForm: React.FC<Props> = ({ submitFn, employeeUpdate }) => {
    const { minBirthYear, minSalary, maxBirthYear, maxSalary, department } = employeeConfig
    const [employee, setEmployee] = useState<Employee>(employeeUpdate ? employeeUpdate : initialEmployee);
    function handlerName(event: any) {
        const name: string = event.target.value;
        const emplCopy = { ...employee };
        emplCopy.name = name;
        setEmployee(emplCopy);
    }
    function handlerBirthDate(event: any) {
        const birthDate = event.target.value;
        const emplCopy = { ...employee };
        emplCopy.birthDate = birthDate;
        setEmployee(emplCopy);
    }
    function handlerDepartment(event: any) {
        const department: string = event.target.value;
        const emplCopy = { ...employee };
        emplCopy.department = department;
        setEmployee(emplCopy);
    }
    function handlerSalary(event: any) {
        const salary: number = +event.target.value;
        const emplCopy = { ...employee };
        emplCopy.salary = salary;
        setEmployee(emplCopy);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        submitFn(employee);
        document.querySelector('form')!.reset();
    }
    function onResetFn(event: any) {
        setEmployee(employeeUpdate ? employeeUpdate : initialEmployee);
    }
   // const formId =  React.useRef(Math.round(Math.random() * 100000000) + '');

    return <Box sx={{height: '70vh'}}>
        <form className="form"  onSubmit={onSubmitFn} onReset={onResetFn}>
            <FormControl key='department' fullWidth required>
                <InputLabel id="department-select-department">Department</InputLabel>
                <Select labelId="select-department-id"
                    label="Department"
                    value={employee.department}
                    onChange={handlerDepartment}>
                    <MenuItem value=''>None</MenuItem>
                    {department.map(dep => <MenuItem value={dep}>{dep}</MenuItem>)}
                </Select>
            </FormControl>
            <TextField key='name' type='string' label='Employee name' required fullWidth
                helperText='enter Employee name' onChange={handlerName}
                value={employee.name} inputProps={{
                    readOnly: !!employeeUpdate
                }} />
            <TextField key='date' type='date' required fullWidth label='BirthDate'
                value={employee.birthDate} onChange={handlerBirthDate} inputProps={{
                    readOnly: !!employeeUpdate,
                    min: `${minBirthYear}-01-01`,
                    max: `${maxBirthYear}-12-31`

                }} InputLabelProps={{ shrink: true }} />
                <TextField key='salary' type='number' required fullWidth label='Salary'
                value={employee.salary} onChange={handlerSalary} helperText={`enter salary in range ${minSalary}-${maxSalary}`}
                inputProps={{
                    min: `${minSalary}`,
                    max: `${maxSalary}`
                }}/>
                <Box className= 'form-button'>
                    <Button type='submit' >Submit</Button>
                <Button type='reset' >Reset</Button>
                </Box>
                
        </form>
    </Box>
}