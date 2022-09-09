import React from 'react';
import {BarItemProps} from "../../../types";
import {useRouter} from "next/router";
import {Link} from "@mui/material";

const BarItem = ({name , link}: BarItemProps) => {

    const router = useRouter();
    return (
        <div>


        <Link sx={{ color: 'white' }} href={link} underline="none">
            {name}
        </Link>
        </div>
            );
};
export default BarItem;