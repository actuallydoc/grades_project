import React, {useEffect} from 'react';
import { trpc } from "../../utils/trpc"
import Login from "../../components/Forms/Login/Login";
import { ToastContainer, toast } from 'react-toastify';
import MainComponent from "../../components/Forms/Login/MainComponent";
const Index = () => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <div className={""}>
              <div>
                    <MainComponent/>
                </div>
            </div>
        </div>
    );
};

export default Index;