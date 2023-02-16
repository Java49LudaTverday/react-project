import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { Stat, statAge, statSalary } from "../../service/EmployeesService";

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const columns = React.useRef<GridColDef[]>([
        { field: 'min', headerName: 'Min salary', flex: 1 },
        { field: 'max', headerName: 'Max salary', flex: 1 },
        { field: 'avr', headerName: 'Avarage salary', flex: 1 }
    ])
    const salaryStat = React.useRef<GridRowsProp>([
        { id: 1, ...statSalary(employees) }
    ])

    return <Box sx={{ width:'40vw', height: '40vh' }} >
        {!employees.length && <Typography sx={{ fontSize: "1.8em" }}>Not statistics</Typography>}
        {employees.length &&
            <DataGrid columns={columns.current} rows={salaryStat.current} />}
    </Box>
}
function getStatInform(salaryStat: Stat): JSX.Element {
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography sx={{ fontSize: "1.8em" }}>Min age: {salaryStat?.min}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Max age: {salaryStat?.max}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Avarage age: {salaryStat?.avr}</Typography>
    </Box>
}