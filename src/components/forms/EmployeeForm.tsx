import React, { useState } from "react";
import { FormControl, TextField, InputLabel, Select, Box, MenuItem, Button, Grid, Paper } from "@mui/material";
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
    const styleGrid = {backgroundColor: "#f5f5f5"};
    const styleFontSize = {fontSize: '0.7em'};

    //  <Box height={{ sx: '80vh', sm: '80vh', md: '50vh' }}  >
    return <Grid container justifyContent='center' width={{ sx: '80vw', sm: '80vw', md: '40vw' }} height={{ sx: '90vh', sm: '80vh', md: '50vh' }} rowSpacing={3} >
        <Grid item xs={10} sm={11} md={12}  >
            <Paper style={styleGrid} elevation={7}  >
                <form className="form" onSubmit={onSubmitFn} onReset={onResetFn}  >
                    <Grid container rowSpacing={2} columnSpacing={2} justifyContent='center' width={{ sx: '80vw', sm: '80vw', md: '40vw' }} height={{ sx: '90vh', sm: '60vh', md: '50vh' }} marginTop={{ sm: '5vh' }} >
                        <Grid item xs={10} sm={5} md={8} >
                            <TextField sx={{fontSize: '0.8em'}} key='name' type='string' label='Employee name' required fullWidth
                                helperText='enter Employee name' onChange={handlerName}
                                value={employee.name} inputProps={{
                                    readOnly: !!employeeUpdate
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} sm={5} md={5}>
                            <FormControl sx={{ fontSize: { sx: '0.9rem', sm: '0.8rem', md: '1em' } }} key='department' fullWidth required >
                                <InputLabel id="department-select-department">Department</InputLabel>
                                <Select labelId="select-department-id"
                                    label="Department"
                                    value={employee.department}
                                    onChange={handlerDepartment}>
                                    <MenuItem value=''>Select department</MenuItem>
                                    {department.map(dep => <MenuItem value={dep}>{dep}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={10} sm={5} md={5}>
                            <TextField  key='date' type='date' required fullWidth label='BirthDate'
                                value={employee.birthDate} onChange={handlerBirthDate} inputProps={{
                                    readOnly: !!employeeUpdate,
                                    min: `${minBirthYear}-01-01`,
                                    max: `${maxBirthYear}-12-31`

                                }} InputLabelProps={{ shrink: true }} />
                        </Grid>
                        <Grid item xs={10} sm={5} md={8}>
                            <TextField sx={{fontSize: '0.8em'}} 
                                key='salary' type='number' required fullWidth label='Salary'
                                value={employee.salary} onChange={handlerSalary} helperText={`enter salary in range ${minSalary}-${maxSalary}`}
                                inputProps={{
                                    min: `${minSalary}`,
                                    max: `${maxSalary}`
                                }} />
                        </Grid>
                        {/* <Box className='form-button'>     
                        </Box> */}
                    </Grid>
                    <Grid container justifyContent="center" width={{ sx: '80vw', sm: '80vw', md: '40vw' }} textAlign='center' columnSpacing={3} >
                        <Grid item xs={4} sm={3} md={2} marginBottom={{ sx: '1vh', sm: '2vh', md: '3vh' }} >
                            <Paper>
                                <Button sx={{ fontSize: { sx: '0.7rem', sm: '0.7rem', md: '0.9rem'} }} type='submit' >Submit</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sm={3} md={2} marginBottom={{ sx: '1vh', sm: '2vh', md: '3vh' }}>
                            <Paper>
                                <Button sx={{ fontSize: { sx: '0.7rem', sm: '0.7rem', md: '0.9rem' } }} type='reset' >Reset</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    </Grid>
    //</Box>
}