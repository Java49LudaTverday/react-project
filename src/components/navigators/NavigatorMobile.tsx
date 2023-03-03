import {  Box } from "@mui/material";
import React from "react";
import { NavigatorProps } from "../../models/NavigatorProps";
import { Add, Group, GroupAdd, Login, Logout, QueryStats } from "@mui/icons-material";
import { TemporaryDrawer } from "../common/TemporaryDrower";
const icons: any = [<Group />, <Add />, <QueryStats />, <QueryStats />, <GroupAdd />, <Login />, <Logout />];

export const NavigatorMobile: React.FC<NavigatorProps> = ({ routers }) => {   

    const [open, setOpen] = React.useState(false);    

    return <Box sx={{ marginTop: { xs: "15vh", sm: "20vh" } }}>
        <TemporaryDrawer open={open} handlerFn={async (isOpen) => setOpen(isOpen) } 
        routes={routers} icons={icons}/>        
    </Box >
}
