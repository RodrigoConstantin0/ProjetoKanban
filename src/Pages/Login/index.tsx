import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
const Login: React.FC = () => {
    return (
        <>
            <div className='Login-header'>                
                <img src="/src/Assets/KanbanLogo.png" alt="Logo" className='logo' />
                <h2>
                    Grupo 02 - Kanban
                </h2>
            </div>
            <div className='login-style'>

                <h1>Login</h1>
                
            <div className='input-container'> 
                <label htmlFor="login"></label>
                <input type="text" placeholder='Digite seu usuario' />
            </div>

            <div className='input-container'>
                <label htmlFor="password"></label>
                <input type="password" placeholder='Digite sua senha' />
            </div>

               <button>Logar</button>
               <Link to="../Register/index.tsx" className='register-link'>Não tem uma conta? Cadastre-se aqui!</Link>            
            </div>
        </>
    );
}

export { Login };

