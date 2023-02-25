import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { DataGrid, GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import React, {  useState } from "react";
import './table.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { employeesAction } from "../../redux/employeesSlice";
import { Edit, PersonAdd } from "@mui/icons-material";
import { EmployeeForm } from "../forms/EmployeeForm";


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
                [<GridActionsCellItem label='remove' icon={<Edit />}
                    onClick={() => {
                        setFlEdit(true);
                        setUpdEmployee(params.row);
                    }} />,
                <GridActionsCellItem label='remove' icon={<DeleteIcon />}
                    onClick={() => dispatch(employeesAction.removeEmployee(+params.id))} />,
                <GridActionsCellItem label='add' icon={<PersonAdd />}
                    onClick={() => {
                        setFlAdd(true);
                    }} />] :
                []
        }
    ]);
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const dispatch = useDispatch();
    const [flEdit, setFlEdit] = useState(false);
    const [flAdd, setFlAdd] = useState(false);
    const [updatedEmployee, setUpdEmployee] = useState();

    return <Box sx={{ height: "70vh", width: "70vw" }}>
        {(!flEdit && !flAdd) && <DataGrid columns={columns.current} rows={employees} />}
        {(flEdit && !flAdd) && <EmployeeForm submitFn={function (empl: Employee): boolean {
            dispatch(employeesAction.updateEmployee(empl));
            setFlEdit(false);
            return true;
        }
        } employeeUpdate={updatedEmployee} />}
        {(flAdd && !flEdit) && <EmployeeForm submitFn={function (empl: Employee): boolean {
            dispatch(employeesAction.addEmployee(empl));
            setFlAdd(false);
            return true;
        }} />}
    </Box>
}

