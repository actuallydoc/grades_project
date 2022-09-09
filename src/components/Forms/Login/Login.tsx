import React from 'react';
import FormButton from "./FormButton";
import FormItem from "./FormItem";

const Login = () => {
    const handleClick = (e: any) => {
        e.preventDefault();
        console.log("You clicked the button for login");
    }

    return (
        <div className={"flex"}>
            <div className={"flex-col pt-2 font-normal bg-slate-300 box w-[250px]  justify-center  text-center rounded-lg border-2  drop-shadow-lg "}>
                <div className={"text-center m-auto text-center"}>
                    <div className={"pb-2 font-bold border-2 w-[100px] h-[30px] rounded-lg drop-shadow-lg"}>
                        <p>Login Form</p>
                    </div>
                    <div className={""}>
                        <FormItem type={"text"} name={"username"} id={"username"} content={"Username"}/>
                    </div>
                    <div>
                       <FormItem name={"Password"} id={"password"} type={"password"} content={"Password"}/>
                    </div>
                      <FormItem type={"email"} id={"email"} content={"Email"} name={"email"} />
                    <div/>
                    <div className={"pt-2 pb-2"}>
                        <FormButton text={"Login"} callback={handleClick} type={'button'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;