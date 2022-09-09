import React from 'react';
import {FormItemProps} from '../../../../types'
const FormItem = ({ type, name , id, content }: FormItemProps) => {
    return (
        <div>
            <div className={"pt-3"}>
                <p className={"pb-0.5"}>{content}</p>
                <input type={type}name={name} id={id}/>
            </div>
        </div>
    );
};

export default FormItem;