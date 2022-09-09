import React, {useEffect} from 'react';
import { trpc } from "../../utils/trpc"
import BarItem from "./BarItem";

const Bar = () => {

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className={"bg-black text-slate-200"}>
                <div className={"flex justify-between"}>
                    <div className={"flex"}>
                        <div className={"p-2"}>
                            <BarItem name={"Home"} link={"/"}/>
                        </div>
                        <div className={"p-2"}>
                            <BarItem name={"Login"} link={"/login"}/>
                        </div>
                        <div className={"p-2"}>
                            <BarItem name={"Register"} link={"/register"}/>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bar;