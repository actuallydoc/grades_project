import React from 'react';
import Login from "./Login";
import Head from "next/head";
import Bar from "../../Navbar/Bar";

const MainComponent = () => {
    return (
        <div>
            <Head>
                <Bar/>
            </Head>
            <div className={"flex flex-col h-screen justify-center items-center"}>
                <div className={""}>
                    <Login />
                </div>

            </div>
        </div>
    );
};

export default MainComponent;