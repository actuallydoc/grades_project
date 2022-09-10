import React from 'react';
import {LoginButtonProps} from '../../../../types'
import {Button} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
const FormButton = ({text, callback, type} : LoginButtonProps) => {
    return (
        <div>
            <div>
                <Button className={"bg-sky-400"} onClick={callback} type={type} variant={"contained"} endIcon={<LoginIcon />} >{text}</Button>
            </div>

        </div>
    );
};
export default FormButton;