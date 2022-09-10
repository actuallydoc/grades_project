import React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {Button} from "@mui/material";

const JoinButton = () => {
    const handleClick = () => {
        //Redirect to register page

    }
    return (
        <div className={"pb-2"}>
            <div className={"text-slate-600"}>
                <Button className={"bg-sky-400"} onClick={handleClick} type={"button"} variant={"contained"} endIcon={<HowToRegIcon />} >Join</Button>
            </div>
        </div>
    );
};

export default JoinButton;