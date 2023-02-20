import { AccountCircle } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux"
import { authActions } from "../../redux/authSlice";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = React.useState('');

    return <Box sx={{display:'flex', flexDirection:'column'}}>
        <TextField sx={{marginTop:'5vh'}} variant='outlined' label='User name'
        InputProps={{
            startAdornment: (
                <InputAdornment position='start'>
                    <AccountCircle />
                </InputAdornment>
            )
        }}
        onChange ={(event: React.ChangeEvent<HTMLInputElement>) => {
           setUserName(event.target.value);
        }}/>
        <Button onClick={(event): void => {
            dispatch(authActions.login(userName))
        }}>Login</Button>
    </Box>
}