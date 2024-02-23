import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthServiceProps from '../../Services/AuthService';
import { Button } from '../../Components/Button';
import './style.css'


const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    interface User {
        name: string;
        email: string;
        password: string;
    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const existingUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const user = existingUsers.find((user) => user.email === email && user.password === password);
        setName(JSON.stringify(user?.name))

        if (user) {
            AuthServiceProps.login(email,name);            
        } else {
            setErrorMessage('Usuário ou senha incorretos.');
        }
    };

    return (
        <>
            <div className="Login-header">
                <img src="/src/Assets/KanbanLogo.png" alt="Logo" className="logo" />
                <h2>Grupo 02 - Kanban</h2>
            </div>
            <div className="login-style">
                <h1 className='h1Login'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div> 
                        <label htmlFor="login"></label>
                        <input
                            type="text"
                            placeholder='Digite seu email'
                            className='input-Login'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input 
                            type="password" 
                            placeholder='Digite sua senha'
                            className='input-Login' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>                                           
                     <Button  titulo="Entrar" tipo="login" estilo="login-button"/>                      
                   
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    
                </form>
                <Link to="../Register" className='register-link'>Não tem uma conta? Cadastre-se aqui!</Link>            
            </div>
        </>
    );
}

export { Login };