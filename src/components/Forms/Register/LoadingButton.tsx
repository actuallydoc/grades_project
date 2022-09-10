import {LoadingButtonProps} from "../../../../types";
import {Button, Tooltip} from "@mui/material";
import React from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
const LoadingButton = ({text, type} : LoadingButtonProps) => {
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