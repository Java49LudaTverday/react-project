import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { DataGrid, GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import React, { useState } from "react";
import './table.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { employeesAction } from "../../redux/employeesSlice";
import { Edit, PersonAdd } from "@mui/icons-material";
import { EmployeeForm } from "../forms/EmployeeForm";
import { UserDialog } from "../UserDialog";


export const Employees: React.FC = () => {
    const auth: string = useSelector<any, string>((state) => state.auth.authenticated);
    const columns = React.useRef<GridColumns>([
        { field: 'id', headerClassName: 'header', headerName: 'ID', flex: 0.6, headerAlign: 'center', align: 'center' },
        { field: 'name', headerClassName: 'header', headerName: 'Employee Name', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'birthDate', headerClassName: 'header', headerName: 'Date of Birth', flex: 1, type: 'date', align: 'center', headerAlign: 'center' },
        { field: 'department', headerClassName: 'header', headerName: 'Department', flex: 1, align: 'center', headerAlign: 'center' },
        { field: 'salary', headerClassName: 'header', headerName: 'Salary (NIS)', flex: 0.8, type: 'number', align: 'center', headerAlign: 'center' },
        {
            field: 'actions', type: 'actions', getActions: (params) => auth.includes('admin') ?
                [<GridActionsCellItem label='edit' icon={<Edit />}
                    onClick={() => {
                        setFlEdit(true);
                        setMessage('Do you want to edit this employee?');
                        setUpdEmployee(params.row);

                    }} />,
                <GridActionsCellItem label='remove' icon={<DeleteIcon />}
                    onClick={() => {
                        setMessage('Do you want delete this employee?');
                        setFlDelete(true);  
                       setIDEmpl(+params.id); 
                                    
                    }
                    } />,
                <GridActionsCellItem label='add' icon={<PersonAdd />}
                    onClick={() => {
                        setFlAdd(true);                       
                           setMessage('Do you want to add an employee?') ;                        
                    }} />] :
                []
        }
    ]);
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const dispatch = useDispatch();
    const [flEdit, setFlEdit] = useState(false);
    const [flAdd, setFlAdd] = useState(false);
    const [flDelete, setFlDelete] = useState(false);
    const [updatedEmployee, setUpdEmployee] = useState();
    const [emplID, setIDEmpl] = useState<number>();
    const [message, setMessage] = useState('');
    function getLayout (): JSX.Element {
        let component: JSX.Element;
        if(flEdit){
            component = <><EmployeeForm submitFn={function (empl: Employee): boolean {
                dispatch(employeesAction.updateEmployee(empl));
                setFlEdit(false);
                return true;
            } } employeeUpdate={updatedEmployee} /><UserDialog messageContent={message} buttonsName={{agree: "Edit", disagree: "Not"}}
            flDisAction={ ()=> {
                setFlEdit(false);
            } } /></>
        } else if(flAdd){
            component = <><EmployeeForm submitFn={function (empl: Employee): boolean {
                dispatch(employeesAction.addEmployee(empl));
                setFlAdd(false);
                return true;
            }} /> <UserDialog messageContent={message} buttonsName={{agree: "Add", disagree:"Not"}} flDisAction={() => {
                setFlAdd(false);
            }} /></>
        } else if(flDelete){
          component = <><DataGrid columns={columns.current} rows={employees} /><UserDialog messageContent={message} buttonsName={{agree:"Delete", disagree: "Not"}}
          flDisAction={() => { 
               setFlDelete(false);                       
          } } flAction={()=> {
            console.log(emplID);
            setFlDelete(false);
            dispatch(employeesAction.removeEmployee(emplID));            
          }} /></>         
        } else {
          component =  <DataGrid columns={columns.current} rows={employees} />;
        }
        return component;
    }
    
    return <Box sx={{ height: "70vh", width: "70vw" }}>
        {getLayout()}        
    </Box>
}

