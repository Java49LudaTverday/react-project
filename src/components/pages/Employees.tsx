import { Box, List, ListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";

export const Employees: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.employees.employees);
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
         {!employees.length && <Typography sx={{ fontSize: "1.8em" }}>Not employees</Typography>}
         {employees.length && <List>           
             {getListEmployees(employees)}
        </List>
}
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
