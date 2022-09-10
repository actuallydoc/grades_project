import React from 'react';
import {Button} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
const LoginButton = () => {
    const handleClick = () => {
        //Redirect to register page

    }
    return (
        <div className={"pb-2"} color={"success"}>
            <div>
                <Button className={"bg-sky-400"} onClick={handleClick} type={"button"} variant={"contained"} endIcon={<LoginIcon />} >Login</Button>
            </div>
        </div>
    );
};

export default LoginButton;