import React from 'react';
import {FormItemProps} from '../../../../types'
import {InputAdornment, TextField} from "@mui/material";
const FormItem = ({ type, name , id, content, callback, children }: FormItemProps) => {
    return (
        <div className={"flex"}>
            <div className={"rounded-lg text-center"}>
               <div className={"pt-3 p-3"}>
                   <TextField InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               {children}
                           </InputAdornment>
                       ),
                   }} onChange={callback} name={name} type={type} id={id} label={content} variant="outlined" required/>
               </div>

            </div>
        </div>
    );
};

export default FormItem;