import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonGlobal {
    titulo: ReactNode;
    type?: HTMLButtonElement['type'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonGlobal> = ({ titulo, onClick, type }) => {
    return (
        <button onClick={onClick} type={type}>
            {titulo}
        </button>
    );
};

export { Button };
