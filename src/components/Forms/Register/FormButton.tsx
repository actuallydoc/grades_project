import React from 'react';
import {LoginButtonProps} from '../../../../types'
import {Button} from "@mui/material";

import HowToRegIcon from '@mui/icons-material/HowToReg';
const FormButton = ({text, callback, type} : LoginButtonProps) => {
    return (
        <div>
                <Button onClick={callback} type={type} variant={"contained"} endIcon={<HowToRegIcon />} >{text}</Button>
        </div>
    );
};
export default FormButton;