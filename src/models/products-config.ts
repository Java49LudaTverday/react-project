import { NavigatorProps } from "./NavigatorProps";

export const productsConfig: NavigatorProps = {
    className: {
        ulClassName: 'navigator-list',
        liClassName: 'navigator-item'
    },
    routers: [
        {path: 'products/dairy', label: 'Dairy products'},
        {path: 'products/bread', label: 'Bread products'}
    ]
}