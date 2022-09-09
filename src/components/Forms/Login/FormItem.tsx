import React from 'react';
import {FormItemProps} from '../../../../types'
import {TextField} from "@mui/material";
const FormItem = ({ type, name , id, content, callback }: FormItemProps) => {
    return (
        <div className={"flex"}>
            <div className={"rounded-lg text-center"}>
               <div className={"pt-3 p-3"}>
                   <TextField onChange={callback} name={name} type={type} id={id} label={content} variant="outlined" required/>
               </div>

            </div>
        </div>
    );
};

export default FormItem;