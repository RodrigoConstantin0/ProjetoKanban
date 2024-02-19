import React from "react";
import './style.css'
import { Link } from "react-router-dom";
const Register: React.FC = () => {
    return (
        <>
           <div className='Login-header'>                
                <img src="/src/Assets/KanbanLogo.png" alt="Logo" className='logo' />
                <h2>
                    Grupo 02 - Kanban
                </h2>
            </div>

            <div className="register-global">
                <form className="form-register">
                        <h1>Cadastre - se </h1>
                    <label htmlFor="name">
                    <input type="text" placeholder="Digite seu nome" />                    
                    </label>

                    <label htmlFor="password"> 
                    <input type="password" placeholder="Digite a senha" />
                    </label>

                    <label htmlFor="password"> 
                    <input type="password" placeholder="Confirme a senha"/>
                    </label>

                    <label htmlFor="email">
                    <input type="email" placeholder="Digite um Email valido" />
                    </label>

                    <button >Cadastrar</button>

                    <Link to="../Login/index.tsx" className="form-register">Já possui cadastro? Clique aqui !</Link>
                    
                </form>
            </div>
        </>
    );
}

export {Register}