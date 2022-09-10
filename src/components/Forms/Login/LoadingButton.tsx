import React from 'react';
import {Button, Tooltip} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {LoadingButtonProps} from "../../../../types";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
const LoadingButton = ({type , text}:LoadingButtonProps) => {
    return (
        <div>
                <div>
                    <Tooltip title="Loading..." arrow>
                        <Button className={"bg-sky-400"} type={type} variant={"contained"} endIcon={<RestartAltIcon />} disabled>{text}</Button>
                    </Tooltip>
                </div>
        </div>
    );
};

export default LoadingButton;