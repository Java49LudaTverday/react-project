import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { GridColumns, GridRowsProp } from "@mui/x-data-grid/models";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { Stat, statAge } from "../../service/EmployeesService";

export const AgeStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const columns = React.useRef<GridColumns>([
        {field: 'min', headerName:'Min age', flex: 1},
        {field: 'max', headerName: 'Max age', flex: 1},
        {field: 'avr', headerName: 'Avarage age', flex: 1}
    ]); 
    const objStatAge = statAge(employees);
    const row = React.useRef<GridRowsProp>([
        {id: 1, ...objStatAge}
    ])
    return <Box sx={{ width:'40vw', height: '40vh' }} >
        {!employees.length && <Typography sx={{ fontSize: "1.8em" }}>Not statistics</Typography>}
        {employees.length && 
        <DataGrid columns={columns.current} rows={row.current}/>}
    </Box>
}

function getStatInform(ageStat: Stat): JSX.Element {
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography sx={{ fontSize: "1.8em" }}>Min age: {ageStat?.min}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Max age: {ageStat?.max}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Avarage age: {ageStat?.avr}</Typography>
    </Box>
}


