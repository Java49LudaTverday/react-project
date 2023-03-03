import { TextField } from "@mui/material";
import { NavigatorProps } from "./NavigatorProps";

export const layoutConfig: NavigatorProps = {
    routers: [
        { path: '/', label: 'Employees', flAdmin: true, flAuth: true },
        { path: '/addEmployee', label: 'Add employee', flAdmin: true, flAuth: false},
        { path: '/ageStatistics', label: 'Age statistics', flAdmin: true, flAuth: true },
        { path: '/salaryStatistics', label: 'Salary statistics', flAdmin: true, flAuth: true },
        {path: '/generation', label: 'Generation', flAdmin: true, flAuth: false}, 
        {path: '/login', label: 'Login', flAdmin: false, flAuth: false},
        {path: '/logout', label: `Logout `, flAdmin: true, flAuth: true}
    ]
}