import { FC, MouseEventHandler, ReactNode } from "react";
import { CgLogIn} from "react-icons/cg";
import { CiLogout } from "react-icons/ci";


interface ButtonGlobal {
    estilo: string
    tipo?: 'login' | 'logout'
    titulo: ReactNode;
    type?: HTMLButtonElement['type'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonGlobal> = ({ titulo, onClick, type, tipo, estilo}) => {
    return (
        <button onClick={onClick} type={type} className={estilo}>
            {
             tipo === 'login'&&    
            <CgLogIn style={{ marginRight: '8px', color: 'white', alignItems:'center' }}/>            
            }  
            {
                tipo === 'logout' &&
                <CiLogout style={{ marginRight: '8px', color: 'white', alignItems:'center' }} />
            }     
            {titulo}
        </button>
    );
};

export { Button };
