export interface LoginButtonProps {
    text: string;
    type: "submit" | "reset" | "button";
    callback: () => null;
}

export interface FormItemProps {
    name: string;
    id: string;
    type: "text" | "password" | "email";
    content: string;

}