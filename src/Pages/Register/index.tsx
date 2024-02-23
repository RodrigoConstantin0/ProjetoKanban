import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import kanbanLogo from "../../Assets/KanbanLogo.png";
import githubLogo from "../../Assets/logoGithub.svg";
import './style.css';
import { Button } from "../../Components/Button";

interface User {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }
    
    const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    
    const existingUser = existingUsers.find(user => user.email === email || user.name === name);
    if (existingUser) {
      setErrorMessage("Nome de usuário ou e-mail já estão em uso.");
      return;
    }
    
    const newUser: User = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    AuthService.login(email, name);   
    alert("Cadastro realizado com sucesso!");
    
    const isLoggedIn = AuthService.isAuthenticated();
    if (isLoggedIn) {
      navigate('/');
    } else {
      navigate('/');
      alert("Usuário não autenticado após o cadastro.");
    }
  };
  

  return (
    <>
      <div className="Login-header">
        <img src={kanbanLogo} alt="Logo" className="logo" />
        <h2 className="h2-style">Grupo 02 - Kanban</h2>
      </div>

      <div className="register-global">
        <form className="form-register" onSubmit={handleRegister}>
          <h1 className="h1Register">Cadastre - se</h1>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-Cadastro"
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-Cadastro"
            />
          </label>

          <label htmlFor="confirmPassword">
            <input
              type="password"
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-Cadastro"
            />
          </label>

          <label htmlFor="email">
            <input
              type="email"
              placeholder="Digite um Email válido"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-Cadastro"
            />
          </label>
          
          <Button titulo="Cadastrar" type="submit" estilo="register-button"/>
          

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <Link to="/" className="register"> Já possui cadastro? Clique aqui! </Link>
        </form>        
      </div>
      <footer className='footer-style'>
        <div className='footer-left'> 
        <p className='P-footer'>Feito pelo grupo 2 - Formação Front-end da Ada Tech 2024</p>
        <a
          href="https://github.com/RodrigoConstantin0/ProjetoKanban"
          target="_blank"
        >
          <img
            src={githubLogo}
            alt="logo-gitbub"
            id="logoGithut"
            className='img-footer'
          />
        </a>
        </div>
    </footer>
    </>
  );
};

export { Register };