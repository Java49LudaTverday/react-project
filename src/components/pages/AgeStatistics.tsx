import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import { Stat, statAge } from "../../service/EmployeesService";

export const AgeStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    const [ageStat, setAgeStat] = React.useState<Stat>({ min: 0, max: 0, avr: 0 });
    React.useEffect(() => {
        if (employees.length) {
            setAgeStat(statAge(employees));
        }
    }, employees)
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
        {!employees.length && <Typography sx={{ fontSize: "1.8em" }}>Not statistics</Typography>}
        {employees.length && getStatInform(ageStat)}
    </Box>
}

function getStatInform(ageStat: Stat): JSX.Element {
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography sx={{ fontSize: "1.8em" }}>Min age: {ageStat?.min}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Max age: {ageStat?.max}</Typography>
        <Typography sx={{ fontSize: "1.8em" }}>Avarage age: {ageStat?.avr}</Typography>
    </Box>
}


