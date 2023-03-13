import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/authSlice";

export const Logout: React.FC = () => {
    const dispatch = useDispatch<any>();
    return <Button onClick = {()=> {
        dispatch(authAction.logout())
    }}>Logout</Button>
}