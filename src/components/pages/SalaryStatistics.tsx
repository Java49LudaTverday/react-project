import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import {  statSalary } from "../../service/EmployeesService";
import { Statistics } from "../Statistics";

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);

    return <Box  >
        {employees.length ?
            <Statistics title={"Salary Statistics"} gridProps={statSalary(employees)}  />:
            <Typography sx={{ fontSize: "1.8em" }}>Not statistics</Typography>}
    </Box>
}
