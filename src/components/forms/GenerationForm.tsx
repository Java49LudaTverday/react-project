import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import employeeConfig from '../../config/employee-config.json';
type Props = {
    submitFn: (numEmployee: number) => void;
}
export const GenerationForm: React.FC<Props> = ({ submitFn }) => {
    const { minNumEmpl, maxNumEmpl} = employeeConfig;
    const [amount, setAmount] = useState(0);
    function handlerAmount(event: any) {
     //const name: string = event.target.value;        
        setAmount(event.target.value);
    }

    function onSubmitFn(event: any) {
        event.preventDefault();
        submitFn(amount);
        document.querySelector('form')!.reset();
    }

    // const formId =  React.useRef(Math.round(Math.random() * 100000000) + '');

    return <Box sx={{ height: '20vh' }}>
        <form onSubmit={onSubmitFn} >
            <TextField  type='number' required fullWidth label='Number employees'
                onChange={handlerAmount} inputProps={{

                    min: `${minNumEmpl}`,
                    max: `${maxNumEmpl}`

                }} InputLabelProps={{ shrink: true }} helperText={`enter number in range ${minNumEmpl}-${maxNumEmpl}`}/>
            <Button type='submit' >Generate</Button>
        </form>
    </Box>
}