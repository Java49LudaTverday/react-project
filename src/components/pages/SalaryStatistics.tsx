import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { Stat, statAge, statSalary } from "../../service/EmployeesService";

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const [salaryStat, setSalaryStat] = React.useState<Stat>({ min: 0, max: 0, avr: 0 });
    React.useEffect(() => {
        if (employees.length) {
            setSalaryStat(statSalary(employees));
        }
    }, employees)

    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
        {!employees.length && <Typography sx={{ fontSize: "1.8em" }}>Not statistics</Typography>}
        {employees.length && getStatInform(salaryStat)}        
    </Box>
}
function getStatInform(salaryStat: Stat): JSX.Element {
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography sx={{ fontSize: "1.8em" }}>Min age: {salaryStat?.min}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Max age: {salaryStat?.max}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Avarage age: {salaryStat?.avr}</Typography>
    </Box>
}