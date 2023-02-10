import { NavigatorProps } from "../../models/NavigatorProps";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './navigators.css'
type Props = {
    config: NavigatorProps;
}
export const Navigator: React.FC<Props> = ({ config }) => {
    function activeLink(isActive: boolean): React.CSSProperties | undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            return res = { backgroundColor: 'blue', color: 'white' }
        }
    }
        return <div>
            <nav>
                <ul className={config.className.ulClassName}>
                    {config.routers.map(router => {
                        return <li className={config.className.liClassName}>
                            <NavLink style={({ isActive }) => activeLink(isActive)} to={"/" + router.path}>{router.label}</NavLink>
                        </li>
                    })
                    }
                </ul>
                <Outlet></Outlet>
            </nav>
        </div>
    }