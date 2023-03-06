import { AccountCircle } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch } from "react-redux"
import { authActions } from "../../redux/authSlice";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = React.useState('');
    //const [openAlert, setOpenAlert] = React.useState(false);
    const message = useRef('');

    function isLogin(dataUser: { userName: any, password: any }) {
        const Auth = new AuthService;
        try {
          Auth.login(dataUser);

        } catch (error) {
message.current(error);

        }

    }



    return <div>
        <LoginForm dataFormFn={(dataUser: { userName: any, password: any }) => {
            setUserName(userName);
            dispatch(authActions.login(userName));
        }} messageAlert={message} ></LoginForm>
    </div>
}



//     <Box sx={{display:'flex', flexDirection:'column'}}>
//         <TextField sx={{marginTop:'5vh'}} variant='outlined' label='User name'
//         InputProps={{
//             startAdornment: (
//                 <InputAdornment position='start'>
//                     <AccountCircle />
//                 </InputAdornment>
//             )
//         }}
//         onChange ={(event: React.ChangeEvent<HTMLInputElement>) => {
//            setUserName(event.target.value);
//         }}/>
//         <Button onClick={(event): void => {
//             dispatch(authActions.login(userName))
//         }}>Login</Button>
//     </Box>
// }