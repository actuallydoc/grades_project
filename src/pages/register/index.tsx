import React from 'react';
import Head from "next/head";
import Bar from "../../components/Navbar/Bar";
import MainComponent from "../../components/Forms/Register/MainComponent";

const Index = () => {
    return (
        <div>
            <div className={"relative"}>
                <div>
                    <div className={""}>
                        <Head>
                            <Bar/>
                        </Head>
                        <div>
                            <MainComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;