import React from 'react';
import {LoginButtonProps} from '../../../../types'
const FormButton = ({text, callback, type} : LoginButtonProps) => {
    return (
        <div>
            <div className={"rounded-lg bg-gray-300 text-1xl border-2 p-1 w-[60px] text-center justify-center transform hover:scale-105 duration-150"}>
                <button  onClick={callback} type={type}>{text}</button>
            </div>
        </div>
    );
};

export default FormButton;