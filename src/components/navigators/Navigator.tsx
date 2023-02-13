import { NavigatorProps } from "../../models/NavigatorProps";
import React from "react";
import { Link,  Outlet } from "react-router-dom";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
type Props = {
    config: NavigatorProps;
}
export const Navigator: React.FC<Props> = ({ config }) => {
    const [tabNumber, setTabNumber] = React.useState(0);
    function changeTabNumber(event: any, newNumber: number) {
        setTabNumber(newNumber);
    }
    return <Box sx={{ marginTop: "15vh" }}>
        <AppBar sx={{ backgroundColor: "lightgrey" }}>
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
