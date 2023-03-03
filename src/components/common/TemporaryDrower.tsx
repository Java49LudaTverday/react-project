import { Box, CssBaseline, Drawer, IconButton, IconButtonClassKey, List, ListItem, ListItemButton, ListItemIcon, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutersProps } from "../../models/NavigatorProps";
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop: string) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

type Props = {
    routes: Array<RoutersProps>;
}

export const TemporaryDrawer: React.FC<Props> = ({ routes }) => {
    const [open1, setOpen] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (routes.length != 0) {
            navigate(routes[0].path);
        }
    }, [routes]);

    const handlerDrawerFn = (isOpen: boolean) => {
        setOpen(isOpen);
    };

    function getLabelActiveRoute(): string {
        const activeRoute = routes.find(r => r.path === location.pathname);
        let label: string = '';
        if (activeRoute) {
            label = activeRoute.label;
        }
        return label;
    }

    const getListItems = ()=> {
        return <List>{routes.map((r, index) => <ListItem key={r.label} disablePadding>
            <ListItemButton onClick={() => {
                handlerDrawerFn(false);
            }} >
                <NavLink to={r.path} style={{ textDecoration: 'none' }} >
                    <ListItemIcon>
                        {r.icon}
                        {/* {icons[index]} */}
                    </ListItemIcon>
                    {r.label}
                </NavLink>
            </ListItemButton>
        </ListItem>
        )}
        </List>
    }

    return <Box sx={{ marginTop: { xs: "15vh", sm: "10vh" } }}>
        <CssBaseline />
        <AppBar position="fixed" open={open1} sx={{ backgroundColor: " #94B0B7", height: { xs: '6vh', sm: "13vh" } }}>
            <Toolbar >
                <IconButton color="inherit" aria-label="open drawer"
                    onClick={() => handlerDrawerFn(true)}
                    edge="start" sx={{ mr: 2, mb: 1.3, ...(open1 && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ mr: 2, mb: 1.3 }}>
                    {getLabelActiveRoute()}
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer sx={{}}
            anchor="left" open={open1}
            onClose={() => handlerDrawerFn(false)}
        >
            {getListItems()}
        </Drawer>
    </Box >
}
