import React, {useState} from 'react';
import FormButton from "./FormButton";
import FormItem from "./FormItem";
import {Divider, Tooltip, Typography} from "@mui/material";
import JoinButton from "./JoinButton";
import Image from "next/image";
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import {trpc} from "../../../utils/trpc";
const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    // @ts-ignore
    const login = trpc.useMutation(['api.login']);
    const handleClick = (e: any) => {
        e.preventDefault();
        console.log("You clicked the button for login");
        // @ts-ignore
        login.mutate(form);
        }

    const handleChange = (e: any) => {
        setForm({...form, [e.target.id]: e.target.value})
        console.log(form);
    }
    return (
        <div className={"flex shadow-2xl  rounded-lg"}>
            <div>
                <Image src={"https://i.pinimg.com/originals/60/fc/d5/60fcd598765e09e2c428cdba27898c60.jpg"} width={1000} height={500} />
            </div>
            <div className={"flex-col pt-4 font-normal box w-[500px] h-[auto] justify-center  text-center rounded-lg  drop-shadow-2xl"}>
                <div className={"justify-center"}>
                    <div className={""}>
                        <Typography variant={"h6"}>Please login</Typography>
                    </div>
                    <Divider variant="middle" />
                    <div>
                        <FormItem type={"email"} id={"email"} content={"Email"} name={"email"} callback={handleChange}>
                            <EmailIcon/>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem  name={"password"} id={"password"} type={"password"} content={"Password"} callback={handleChange}>
                            <PasswordIcon/>
                        </FormItem>
                    </div>
                    <div className={"pt-2 pb-2"}>
                        <Tooltip title="Add" arrow>
                            <FormButton text={"Login"} callback={handleClick} type={'button'}/>
                        </Tooltip>
                    </div>
                    <div className={"p-1 pb-10 text-slate-600"}>
                        <Tooltip title="Click on join button to register a free account" arrow>
                            <Typography variant={"body1"}>Don't have an account?</Typography>
                        </Tooltip>
                  </div>
                    <div>
                        <JoinButton />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Login;