import React, {useEffect} from 'react';
import { trpc } from "../../utils/trpc"
import BarItem from "./BarItem";

const Bar = () => {
    //!TODO Make the navbar sticky have a fixed position
    //!TODO Make the navbar responsive
    //!TODO Make the navbar different if the user is logged in(Logout button , Profile picture , Dashboard button)
    //!TODO Make the navbar different if the user is logged out (default look)
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