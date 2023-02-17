import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import {  statAge } from "../../service/EmployeesService";
import { Statistics } from "../Statistics";

export const AgeStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
   
    return <Box sx={{ width:'40vw', height: '40vh' }} >
        {employees.length ?  <Statistics title={"Age Statistics"} gridProps={statAge(employees)}/>:
        <Typography sx={{ fontSize: "1.8em" }}>Not statistics</Typography>}
    </Box>
}



