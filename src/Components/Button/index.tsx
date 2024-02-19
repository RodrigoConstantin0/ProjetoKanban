import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonGlobal {
    titulo: ReactNode;
    type?: HTMLButtonElement['type']
    cliqueDeFora?: MouseEventHandler
}
const button: FC <ButtonGlobal> = ({titulo, cliqueDeFora, ...props}) => {
    return <button onClick={cliqueDeFora} type={props.type}>{titulo}</button>
}

export {button}