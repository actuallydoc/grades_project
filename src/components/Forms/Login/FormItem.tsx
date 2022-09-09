import React from 'react';
import {FormItemProps} from '../../../../types'
const FormItem = ({ type, name , id, content }: FormItemProps) => {
    return (
        <div className={"flex"}>
            <div className={"rounded-lg border w-[250px] h-[70px]"}>
                <p className={"pb-0.5 rounded-lg border w-[100px]"}>{content}</p>
                <input type={type}name={name} id={id}/>
            </div>
        </div>
    );
};

export default FormItem;