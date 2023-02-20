import { Box, Button, IconButton  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { DataGrid, GridActionsCellItem, GridColumns, GridSelectionModel } from "@mui/x-data-grid";
import React from "react";
import './table.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { employeesAction } from "../../redux/employeesSlice";


export const Employees: React.FC = () => {
    const columns = React.useRef<GridColumns>([
        { field: 'id', headerClassName: 'header', headerName: 'ID', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'name', headerClassName: 'header', headerName: 'Employee Name', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'birthDate', headerClassName: 'header', headerName: 'Date of Birth', flex: 1, type: 'date', align: 'center', headerAlign: 'center' },
        { field: 'department', headerClassName: 'header', headerName: 'Department', flex: 1, align: 'center', headerAlign: 'center' },
        { field: 'salary', headerClassName: 'header', headerName: 'Salary (NIS)', flex: 0.8, type: 'number', align: 'center', headerAlign: 'center' },
        {field: 'actions', type: 'actions', getActions: (params) => {
            return [<GridActionsCellItem label='remove' icon={<DeleteIcon/>} 
            onClick={()=> dispatch(employeesAction.removeEmployee(+params.id))}/>]
        }}
    ])
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const [selectionItems, setSelectionModel] = React.useState<GridSelectionModel>([]);
    console.log(selectionItems);
    const dispatch = useDispatch(); 
    return <Box sx={{ height: "70vh", width: "70vw" }}>
        <DataGrid columns={columns.current} rows={employees} checkboxSelection onSelectionModelChange={(newSelectionModel)=> {
            setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionItems}/>
        {!!selectionItems.length && <IconButton aria-label="delete" size="large" onClick={()=> dispatch(employeesAction.deleteEmployee(selectionItems))}> 
        <DeleteIcon fontSize="inherit" /></IconButton>}
    </Box>
}

