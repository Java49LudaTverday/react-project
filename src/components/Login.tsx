import { authAction } from "../redux/authSlice";
import { useDispatch } from 'react-redux';
import React from 'react';
type Props = {
    inputProcess: (value: string) => void;
}
export const Login: React.FC<Props> = ({inputProcess}) => {
    let inputElement: HTMLInputElement | null
    const inputId = React.useRef(Math.round(Math.random() * 100000000) + '');
    React.useEffect(() => {
        inputElement = document.getElementById(inputId.current) as HTMLInputElement;
    })
    const dispatch = useDispatch();
    function processLogin(): void {
        inputProcess(inputElement!.value);
        dispatch(authAction.login(inputElement!.value));
    }

    return <div>
        <input id={inputId.current} placeholder='enter userName (if you`re admin add "admin")' style={{width: "20vw"}}></input>
        <button onClick={processLogin}>Login</button>
    </div>

}