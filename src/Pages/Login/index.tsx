import React from 'react';

const Login: React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/src/Assets/KanbanLogo.png" alt="Logo" style={{ width: '100px', height: '100px' }} />
                
                <h2 style={{ marginRight: '10px' }}>
                    Grupo 02 - Kanban
                </h2>
            </div>
            <div>
                <label htmlFor="login">Nome:</label>
                <input type="text" id='login' />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id='password' />
            </div>
            <a href="../Register/index.tsx">Não tem uma conta? Cadastre-se aqui!</a>
        </>
    );
}

export { Login };

