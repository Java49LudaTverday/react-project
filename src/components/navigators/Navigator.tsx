import { NavigatorProps } from "../../models/NavigatorProps";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
    config: NavigatorProps;
}
export const Navigator: React.FC<Props> = ({config})=>{

    return <div>
        <nav>
            <ul className={config.className.ulClassName}>
                {config.routers.map(router =>{
                    return  <li className={config.className.liClassName}>
                        <NavLink to={"/"+ router.path}>{router.label}</NavLink>
                    </li>})
                    }
            </ul>
        </nav>
    </div>
}