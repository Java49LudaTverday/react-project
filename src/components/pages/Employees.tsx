import { Box, List, ListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import React from "react";
import './table.css'

export const Employees: React.FC = () => {
    const columns = React.useRef<GridColumns>([
        { field: 'id', headerClassName: 'header', headerName: 'ID', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'name', headerClassName: 'header', headerName: 'Employee Name', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'birthDate', headerClassName: 'header', headerName: 'Date of Birth', flex: 1, type: 'date', align: 'center', headerAlign: 'center' },
        { field: 'department', headerClassName: 'header', headerName: 'Department', flex: 1, align: 'center', headerAlign: 'center' },
        { field: 'salary', headerClassName: 'header', headerName: 'Salary (NIS)', flex: 0.8, type: 'number', align: 'center', headerAlign: 'center' }
    ])
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    return <Box sx={{ height: "80vh", width: "80vw" }}>
        <DataGrid columns={columns.current} rows={employees} />
    </Box>
}
function getListEmployees(employees: Array<Employee>): React.ReactNode {
    return employees.map((empl, ind) => {
        return <ListItem key={ind}>{`ID: ${empl.id} NAME: ${empl.name} 
        BIRTHDAY: ${empl.birthDate} DEPARTMENT: ${empl.department} SALARY: ${empl.salary}`
        }
        </ListItem>
    }
    )
}
