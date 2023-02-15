import { NavigatorProps } from "./NavigatorProps";

export const layoutConfig: NavigatorProps = {
    routers: [
        { path: '', label: 'Employees' },
        { path: 'addEmployee', label: 'Add employee' },
        { path: 'ageStatistics', label: 'Age statistics' },
        { path: 'salaryStatistics', label: 'Salary statistics' }
    ]
}