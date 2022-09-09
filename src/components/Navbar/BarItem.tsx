import React from 'react';
import {BarItemProps} from "../../../types";
import {useRouter} from "next/router";

const BarItem = ({name , link}: BarItemProps) => {
    const router = useRouter();
    return (
        <div className={"cursor-pointer"} onClick={() => router.push(`/${link}`)}>
            <a>{name}</a>
        </div>
    );
};
export default BarItem;