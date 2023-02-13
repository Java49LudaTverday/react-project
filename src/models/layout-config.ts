import { NavigatorProps } from "./NavigatorProps";

export const layoutConfig: NavigatorProps = {
    className: {
        ulClassName: 'navigator-list',
        liClassName: 'navigator-item'
    },
    routers: [
        { path: '', label: 'Home' },
        { path: 'employees', label: 'Employees' },
    ]
}