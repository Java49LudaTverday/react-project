import { authAction } from "../redux/authSlice";
import { useDispatch } from 'react-redux';
import React from 'react';
import { Input } from "./Input";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    return <div>
        <Input inputProcess={function (value: string): string {
            dispatch(authAction.login(value));
            return "";
        }} nameButton={"Login"}></Input>
    </div>

}