import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { NavigatorProps } from "../../models/NavigatorProps";
import { NavigatorMobile } from "./NavigatorMobile";
import { Navigator } from "./Navigator";

export const NavigatorDispatch: React.FC<NavigatorProps> = ({routers}) => {
    const noMobile = useMediaQuery('(min-width: 900px)');
    return <Box>
        {noMobile ? <Navigator routers={routers}/>:
<NavigatorMobile routers={routers}/>}
    </Box>
}