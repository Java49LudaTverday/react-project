import { NavigatorProps } from "../../models/NavigatorProps";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import './navigators.css'
import { AppBar, Box, Tab, Tabs } from "@mui/material";
type Props = {
    config: NavigatorProps;
}
export const Navigator: React.FC<Props> = ({ config }) => {
    function activeLink(isActive: boolean): React.CSSProperties | undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            return res = { backgroundColor: 'blue', color: 'white' }
        }}
    const [tabNumber, setTabNumber] = React.useState(0);
    function changeTabNumber(event: any, newNumber: number){
        setTabNumber(newNumber);
    }
        // return <div>
        //     <nav>
        //         <ul className={config.className.ulClassName}>
        //             {config.routers.map(router => {
        //                 return <li className={config.className.liClassName}>
        //                     <NavLink style={({ isActive }) => activeLink(isActive)} to={"/" + router.path}>{router.label}</NavLink>
        //                 </li>
        //             })
        //             }
        //         </ul>
        //         <Outlet></Outlet>
        //     </nav>
        // </div>
        return <Box sx={{marginTop:"15vh"}}>
            <AppBar sx={{backgroundColor:"lightgrey"}}>
                <Tabs value={tabNumber} onChange={changeTabNumber}>
                     {config.routers.map((router, index) => 
                         <Tab component={Link} to={"/" + router.path} label={router.label} key={index} ></Tab>
                    )
                     }
        
                </Tabs>                
            </AppBar>
            <Outlet></Outlet>
        </Box>
    }
    