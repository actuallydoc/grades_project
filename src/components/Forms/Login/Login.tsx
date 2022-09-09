import React, {useState} from 'react';
import FormButton from "./FormButton";
import FormItem from "./FormItem";
import {Divider, Tooltip, Typography} from "@mui/material";
import JoinButton from "./JoinButton";

const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleClick = (e: any) => {
        e.preventDefault();
        console.log("You clicked the button for login");
    }
    const handleChange = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value})

        console.log(form);

    }

    return (
        <div className={"flex shadow-2xl"}>
            <div className={"flex-col pt-4 font-normal box w-[500px] h-[auto] justify-center  text-center rounded-lg  drop-shadow-2xl"}>
                <div className={"justify-center"}>
                    <div className={""}>
                        <Typography variant={"h6"}>Please login</Typography>
                    </div>
                    <Divider variant="middle" />
                    <div>
                        <FormItem type={"email"} id={"email"} content={"Email"} name={"email"} callback={handleChange}/>
                    </div>
                    <div>
                    <FormItem  name={"password"} id={"password"} type={"password"} content={"Password"} callback={handleChange}/>
                    </div>
                    <div className={"pt-2 pb-2"}>
                        <Tooltip title="Add" arrow>
                            <FormButton text={"Login"} callback={handleClick} type={'button'}/>
                        </Tooltip>
                    </div>
                    <div className={"p-1 text-slate-600"}>
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