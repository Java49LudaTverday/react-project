import { Alert, Box, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { DataGrid, GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import React, { useEffect, useRef, useState } from "react";
import './table.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { employeesAction } from "../../redux/employeesSlice";
import { Edit, PersonAdd } from "@mui/icons-material";
import { EmployeeForm } from "../forms/EmployeeForm";
import { UserDialog } from "../UserDialog";
import { codeActions } from "../../redux/codeSlice";
import { CodeType } from "../../models/CodeType";


export const Employees: React.FC = () => {
    const dispatch = useDispatch<any>();
    const auth: string = useSelector<any, string>((state) => state.auth.authenticated);
    const errorMessage: CodeType = useSelector<any, CodeType>((state) => state.errorCode.code);
   // const [columns, setColumns] = useState<GridColumns>([]);

    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const [flEdit, setFlEdit] = useState(false);
    const [flAdd, setFlAdd] = useState(false);
    const [open, setOpen] = useState(false);
    //useEffect(()=> {setColumns(getColumns()) }, [employees]);
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
                        emplIDEdit.current = +params.id;
                    }} />,
                <GridActionsCellItem label='remove' icon={<DeleteIcon />}
                    onClick={() => {
                        removeEmployee(params.row);
                       // removeEmployee(+params.id)
                        console.log(params.row);
                    }
                    } />
                /*<GridActionsCellItem label='add' icon={<PersonAdd />}
                    onClick={() => {
                        setFlAdd(true);
                        //  setOpen(true);
                        // title.current = 'Add an employee?'
                        // message.current = 'You are going to create a new Employee.';
                    }} />
                */ ] :
                []
        }
    ]);
    const title = useRef('');
    const message = useRef('');
    const emplToUpdate = useRef<Employee>();
    const confirmFn = useRef<(isOk: boolean) => void>((isOK: boolean) => { });
    const emplIDRemove = useRef<number>(0);
    const emplIDEdit = useRef<number>(0);
    
    // function getColumns (): GridColumns {
    //     return [
    //     { field: 'id', headerClassName: 'header', headerName: 'ID', flex: 0.6, headerAlign: 'center', align: 'center' },
    //     { field: 'name', headerClassName: 'header', headerName: 'Employee Name', flex: 1, headerAlign: 'center', align: 'center' },
    //     { field: 'birthDate', headerClassName: 'header', headerName: 'Date of Birth', flex: 1, type: 'date', align: 'center', headerAlign: 'center' },
    //     { field: 'department', headerClassName: 'header', headerName: 'Department', flex: 1, align: 'center', headerAlign: 'center' },
    //     { field: 'salary', headerClassName: 'header', headerName: 'Salary (NIS)', flex: 0.8, type: 'number', align: 'center', headerAlign: 'center' },
    //     {
    //         field: 'actions', type: 'actions', getActions: (params) => auth.includes('admin') ?
    //             [<GridActionsCellItem label='edit' icon={<Edit />}
    //                 onClick={() => {
    //                     setFlEdit(true);
    //                     emplIDEdit.current = +params.id;
    //                 }} />,
    //             <GridActionsCellItem label='remove' icon={<DeleteIcon />}
    //                 onClick={() => removeEmployee(+params.id)
    //                 } />
    //             /*<GridActionsCellItem label='add' icon={<PersonAdd />}
    //                 onClick={() => {
    //                     setFlAdd(true);
    //                     //  setOpen(true);
    //                     // title.current = 'Add an employee?'
    //                     // message.current = 'You are going to create a new Employee.';
    //                 }} />
    //             */ ] :
    //             []
    //     }
    // ];
    // }
   
    function getLayout(): JSX.Element {
        let component: JSX.Element =<Box sx={{ height: "70vh", width: "80vw" }}>
            <DataGrid columns={columns.current} rows={employees} />
            {auth.includes('admin')&&  <IconButton onClick={() => setFlAdd(true)}><PersonAdd/></IconButton>}
            </Box> 
        if (errorMessage !== 'OK') {
            component = <Alert severity="error" onClose={() => dispatch(codeActions.setCode('OK'))}>{errorMessage}: contact admin</Alert>
        } else if (flEdit) {
            component = <EmployeeForm submitFn={function (empl: Employee): boolean {
                console.log(errorMessage);
                setOpen(true);
                updateEmployee();
                emplToUpdate.current = empl;
                setFlEdit(false);
                return true;
            }} employeeUpdate={employees.find(empl => empl.id === emplIDEdit.current)} />
        } else if (flAdd) {
            component = <EmployeeForm submitFn={function (empl: Employee): boolean {
                // console.log(errorMessage);
                // if (errorMessage === "Authorization Error") {
                //     setFlAdd(false);
                // } else {
                dispatch(employeesAction.addEmployee(empl));
                setFlAdd(false);
                // }
                return true;
            }} />
        } 
        return component;
    }
   // function removeEmployee(id: number) {
        function removeEmployee(empl:any){
        title.current = 'Delete an employee?';
       // const currentEmpl = employees.find(empl => empl.id === id);
      //  console.log(currentEmpl);
       // message.current = `You are going to delete an employee: ${currentEmpl?.name}`;
        message.current = `You are going to delete an employee: ${empl.name}`;
        //console.log(id);
       // emplIDRemove.current = id;
        emplIDRemove.current = empl.id;
        console.log(emplIDRemove);
        confirmFn.current = actialRemove;
        setOpen(true);
    }
    function actialRemove(isOk: boolean) {
        if (isOk) {
            console.log(emplIDRemove);
            dispatch(employeesAction.removeEmployee(emplIDRemove.current));
        }
        setOpen(false);
    }


    function updateEmployee() {
        title.current = 'Update an employee?';
        const currentEmpl = employees.find(empl => empl.id === emplIDEdit.current);
        message.current = `You are going to update an employee ${currentEmpl?.name} `;
        confirmFn.current = actialUpdate;
    }
    const actialUpdate = (isOK: boolean) => {
        if (isOK) {
            dispatch(employeesAction.updateEmployee(emplToUpdate?.current));
        }
        setOpen(false);
    }

    return <Box sx={{ height: "70vh", width: "70vw" }}>
        {getLayout()}
        <UserDialog messageContent={message.current} buttonsName={{ agree: "Ok", disagree: "Cancel" }}
            confirmFn={confirmFn.current}
            open={open} title={title.current} />
    </Box>
}

// const columns = React.useRef<GridColumns>([
//         { field: 'id', headerClassName: 'header', headerName: 'ID', flex: 0.6, headerAlign: 'center', align: 'center' },
//         { field: 'name', headerClassName: 'header', headerName: 'Employee Name', flex: 1, headerAlign: 'center', align: 'center' },
//         { field: 'birthDate', headerClassName: 'header', headerName: 'Date of Birth', flex: 1, type: 'date', align: 'center', headerAlign: 'center' },
//         { field: 'department', headerClassName: 'header', headerName: 'Department', flex: 1, align: 'center', headerAlign: 'center' },
//         { field: 'salary', headerClassName: 'header', headerName: 'Salary (NIS)', flex: 0.8, type: 'number', align: 'center', headerAlign: 'center' },
//         {
//             field: 'actions', type: 'actions', getActions: (params) => auth.includes('admin') ?
//                 [<GridActionsCellItem label='edit' icon={<Edit />}
//                     onClick={() => {
//                         setFlEdit(true);
//                         emplIDEdit.current = +params.id;
//                     }} />,
//                 <GridActionsCellItem label='remove' icon={<DeleteIcon />}
//                     onClick={() => removeEmployee(+params.id)
//                     } />
//                 /*<GridActionsCellItem label='add' icon={<PersonAdd />}
//                     onClick={() => {
//                         setFlAdd(true);
//                         //  setOpen(true);
//                         // title.current = 'Add an employee?'
//                         // message.current = 'You are going to create a new Employee.';
//                     }} />
//                 */ ] :
//                 []
//         }
//     ]);