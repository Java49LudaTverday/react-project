import { NavigatorProps } from "./NavigatorProps";
import { Add, Group, GroupAdd, Login, Logout, QueryStats } from "@mui/icons-material";

export const layoutConfig: NavigatorProps = {
    routers: [
        { path: '/', label: 'Employees', flAdmin: true, flAuth: true, icon: <Group /> },
        { path: '/addEmployee', label: 'Add employee', flAdmin: true, flAuth: false, icon: <Add />},
        { path: '/ageStatistics', label: 'Age statistics', flAdmin: true, flAuth: true, icon:<QueryStats /> },
        { path: '/salaryStatistics', label: 'Salary statistics', flAdmin: true, flAuth: true, icon: <QueryStats /> },
        {path: '/generation', label: 'Generation', flAdmin: true, flAuth: false, icon: <GroupAdd />}, 
        {path: '/login', label: 'Login', flAdmin: false, flAuth: false, icon: <Login />},
        {path: '/logout', label: `Logout `, flAdmin: true, flAuth: true, icon: <Logout />}
    ]
}
//const icons: any = [, < />, < />, < />, < />, < />, < />];
//const icons: any = [, , , , , , ];