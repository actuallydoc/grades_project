import React from 'react';
import {LoginButtonProps} from '../../../../types'
const FormButton = ({text, callback, type} : LoginButtonProps) => {
    return (
        <div className={""}>
            <div className={"rounded-lg bg-sky-100 text-1xl border-2 p-1 w-[60px] text-center justify-center transform hover:scale-105 duration-150 cursor-pointer"}>
                <button onClick={callback} type={type}>{text}</button>
            </div>
        </div>
    );
};

export default FormButton;