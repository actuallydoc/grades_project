import React, {useEffect} from 'react';
import { trpc } from "../../utils/trpc"
import Login from "../../components/Forms/Login/Login";
import { ToastContainer, toast } from 'react-toastify';
import MainComponent from "../../components/Forms/Login/MainComponent";
import Head from "next/head";
import Bar from "../../components/Navbar/Bar";
const Index = () => {

    useEffect(() => {

    }, []);

    return (
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
    );
};

export default Index;