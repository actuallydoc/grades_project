import React from 'react';
import Register from "./Register";
import Head from "next/head";
import Bar from "../../Navbar/Bar";

const MainComponent = () => {
    return (
        <div>

            <div className={"flex flex-col h-screen justify-center items-center"}>
                <div className={""}>
                    <Register />
                </div>
            </div>
        </div>
    );
};

export default MainComponent;