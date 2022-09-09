import React from 'react';
import { trpc } from "../../utils/trpc"
import Login from "../../components/Forms/Login/Login";

const Index = () => {


    return (
        <div>
            <div>
                <div className={"bg-gradient-to-r from-gray-300 via-sky-200 to-gray-500 flex flex-col h-screen justify-center items-center"}>
                    <Login />
                </div>

            </div>

        </div>
    );
};

export default Index;