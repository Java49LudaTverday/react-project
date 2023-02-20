import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authSlice";

export const Logout: React.FC = () => {
    const dispatch = useDispatch();
    return <Button onClick = {()=> {
        dispatch(authActions.logout())
    }}>Logout</Button>
}