export interface LoginButtonProps {
    text: string;
    type: "submit" | "reset" | "button";
    callback: any;
}

export interface LoadingButtonProps {
    text: string;
    type: "submit" | "reset" | "button";

}

export interface FormItemProps {
    name: string;
    id: string;
    type: "text" | "password" | "email";
    content: string;
    callback: any;
    children: any;

}


export interface BarItemProps {
    name: string;
    link: string;
}