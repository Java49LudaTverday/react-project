import { authAction } from "../redux/authSlice";
import {useDispatch} from 'react-redux';
export const Logout: React.FC = () => {
    const dispatch = useDispatch();

    return <button onClick = {() => dispatch(authAction.logout())}>Logout</button>
}